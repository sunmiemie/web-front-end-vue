const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

const lists = [
  ['allOnlineCar', 'onlineCarList'],
  ['allOfflineCar', 'offlineCarList'],
  ['allFactoryAddr', 'factoryAddr'],
  ['allStationAddr', 'stationAddr'],
  ['allCarrierAddr', 'carrierAddr'],
];
const mapComponents = Object.fromEntries([
  'BaiduMap', 'BmCityList', 'BmDriving', 'BmGeolocation', 'BmLabel',
  'BmlMarkerClusterer', 'BmMarker', 'BmScale',
].map(name => [name, {}]));

function deferred() {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
}

async function load(overrides = {}) {
  const calls = [];
  const payloads = Object.fromEntries(lists.map(([request]) => [request, [{ id: request }]]));
  const api = Object.fromEntries(lists.map(([request]) => [request, () => {
    calls.push(request);
    return overrides[request] ? overrides[request]() : Promise.resolve(payloads[request]);
  }]));
  const { default: component } = await loadModule('src/components/public/BaiduMap.vue', {
    require: value => value,
  }, {
    'vue-baidu-map': mapComponents,
    jquery: { default: () => {} },
    '../../api/tisinghua-static': api,
  });
  // 工厂/站点页面不显示车辆，也不能被车辆接口的等待阻塞。
  const state = { ...component.data(), carShow: false, dShow: true, carrierShow: false };
  if (component.created) component.created.call(state);
  return { component, state, calls, payloads };
}

test('在线车辆请求等待时其他四类地图标记已独立加载', async () => {
  const online = deferred();
  const { component, state, calls, payloads } = await load({ allOnlineCar: () => online.promise });
  const mounted = component.mounted.call(state);
  try {
    // 等待已完成请求的微任务，在线车辆 Promise 仍由测试保持未完成。
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual([...calls].sort(), lists.map(([request]) => request).sort());
    for (const [request, field] of lists.slice(1)) {
      assert.deepEqual(state[field], payloads[request], field);
    }
    assert.equal(state.onlineCarList.length, 0);
  } finally {
    online.resolve(payloads.allOnlineCar);
    await mounted;
  }
  assert.deepEqual(state.onlineCarList, payloads.allOnlineCar);
});

test('单类标记请求失败不阻止其他列表，也不使挂载回调拒绝', async () => {
  const { component, state, calls, payloads } = await load({
    allOfflineCar: async () => { throw new Error('offline vehicle request failed'); },
  });
  await assert.doesNotReject(component.mounted.call(state));
  assert.equal(calls.length, lists.length);
  assert.ok(Array.isArray(state.offlineCarList));
  assert.equal(state.offlineCarList.length, 0);
  for (const [request, field] of lists.filter(([request]) => request !== 'allOfflineCar')) {
    assert.deepEqual(state[field], payloads[request], field);
  }
});

test('缺失或非数组的标记响应保持空列表，其余结果不受影响', async () => {
  for (const value of [undefined, null, {}, 'not a marker list']) {
    const { component, state, payloads } = await load({ allFactoryAddr: async () => value });
    await component.mounted.call(state);
    assert.ok(Array.isArray(state.factoryAddr), `工厂响应 ${String(value)} 应转换为空数组`);
    assert.equal(state.factoryAddr.length, 0);
    for (const [request, field] of lists.filter(([request]) => request !== 'allFactoryAddr')) {
      assert.deepEqual(state[field], payloads[request], field);
    }
  }
});

test('离开地图后迟到的请求结果不再写入组件状态', async () => {
  const pending = Object.fromEntries(lists.map(([request]) => [request, deferred()]));
  const overrides = Object.fromEntries(lists.map(([request]) => [request, () => pending[request].promise]));
  const { component, state, payloads } = await load(overrides);
  const originalLists = Object.fromEntries(lists.map(([, field]) => [field, state[field]]));
  const mounted = component.mounted.call(state);
  if (component.beforeDestroy) component.beforeDestroy.call(state);
  state._isDestroyed = true;
  for (const [request] of lists) pending[request].resolve(payloads[request]);
  await mounted;

  for (const [, field] of lists) {
    assert.equal(state[field], originalLists[field], `${field} 不应被迟到结果替换`);
    assert.equal(state[field].length, 0);
  }
});
