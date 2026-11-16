const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

const requests = [
  ['carCount', undefined, 'rData', 'carCount'],
  ['statisticalAdd', 'day', 'rData', 'aDay'],
  ['statisticalAdd', 'month', 'rData', 'aMonth'],
  ['statisticalAdd', 'year', 'rData', 'aYear'],
  ['statisticalAlarm', 'day', 'rData', 'carAlarm'],
  ['statisticalSell', 'day', 'lData', 'sellDay'],
  ['statisticalSell', 'month', 'lData', 'sellMonth'],
  ['statisticalSell', 'year', 'lData', 'sellYear'],
  ['statisticalManufacture', 'day', 'lData', 'pDay'],
  ['statisticalManufacture', 'month', 'lData', 'pMonth'],
  ['statisticalManufacture', 'year', 'lData', 'pYear'],
  ['statisticalTransport', 'day', 'lData', 'tDay'],
  ['statisticalTransport', 'month', 'lData', 'tMonth'],
  ['statisticalTransport', 'year', 'lData', 'tYear'],
];
const requestKey = (name, date) => date ? `${name}:${date}` : name;

function deferred() {
  let resolve;
  const promise = new Promise(done => { resolve = done; });
  return { promise, resolve };
}

async function load(overrides = {}) {
  const calls = [];
  const payloads = Object.fromEntries(requests.map(([name, date], index) => [
    requestKey(name, date), name === 'carCount' ? 0 : { data: index, unit: 'synthetic' },
  ]));
  const api = Object.fromEntries([...new Set(requests.map(([name]) => name))].map(name => [name, params => {
    const key = requestKey(name, params && params.date);
    calls.push(key);
    return Object.prototype.hasOwnProperty.call(overrides, key) ? overrides[key]() : Promise.resolve(payloads[key]);
  }]));
  // 保留组件未使用的导入，不执行真实接口或嵌套组件。
  for (const name of ['statisticalTransportList', 'statisticalStorage', 'statisticalStorageList',
    'statisticalManufactureList', 'statisticalAlarmList', 'statisticalUse', 'statisticalUseList',
    'statisticalSellList', 'statisticalAddList']) api[name] = () => { throw new Error(`unexpected request: ${name}`); };
  const { default: component } = await loadModule('src/view/index.vue', {
    window: { removeEventListener() {} },
  }, {
    '../components/index/IndexBottom.vue': { default: {} },
    '../components/index/IndexLeft.vue': { default: {} },
    '../components/index/IndexRight.vue': { default: {} },
    '../components/public/TopNav': { default: {} },
    '../api/tisinghua-static': api,
  });
  const state = { ...component.data(), changeHight() {} };
  if (component.created) component.created.call(state);
  return { component, state, calls, payloads };
}

test('首页车辆总数仍在等待时，其余统计独立显示且日期映射正确', async () => {
  const count = deferred();
  const { component, state, calls, payloads } = await load({ carCount: () => count.promise });
  const mounted = component.mounted.call(state);
  try {
    await new Promise(resolve => setImmediate(resolve));
    assert.deepEqual([...calls].sort(), requests.map(([name, date]) => requestKey(name, date)).sort());
    for (const [name, date, group, field] of requests.slice(1)) {
      assert.deepEqual(state[group][field], payloads[requestKey(name, date)], field);
    }
  } finally {
    count.resolve(payloads.carCount);
    await mounted;
  }
  assert.equal(state.rData.carCount, 0);
});

test('单项首页统计拒绝不阻断其他结果，也不使挂载回调拒绝', async () => {
  const failed = 'statisticalAdd:day';
  const { component, state, calls, payloads } = await load({
    [failed]: async () => { throw new Error('synthetic offline'); },
  });
  const original = state.rData.aDay;
  await assert.doesNotReject(component.mounted.call(state));
  assert.equal(calls.length, requests.length);
  assert.equal(state.rData.aDay, original);
  assert.doesNotThrow(() => state.rData.aDay.data);
  for (const [name, date, group, field] of requests) {
    if (requestKey(name, date) !== failed) assert.deepEqual(state[group][field], payloads[requestKey(name, date)], field);
  }
});

test('统计接口缺失结果仍保留可读取 data 的原占位，有效零值原样显示', async () => {
  const { component, state } = await load({
    'statisticalSell:day': async () => undefined,
    'statisticalManufacture:month': async () => null,
    'statisticalTransport:year': async () => ({ data: 0 }),
  });
  const sellDay = state.lData.sellDay;
  const pMonth = state.lData.pMonth;
  await component.mounted.call(state);
  assert.equal(state.lData.sellDay, sellDay);
  assert.equal(state.lData.pMonth, pMonth);
  assert.doesNotThrow(() => state.lData.sellDay.data);
  assert.doesNotThrow(() => state.lData.pMonth.data);
  assert.equal(state.lData.tYear.data, 0);
  assert.equal(state.rData.carCount, 0);
});

test('离开首页后迟到的所有统计不再写入页面状态', async () => {
  const pending = Object.fromEntries(requests.map(([name, date]) => [requestKey(name, date), deferred()]));
  const overrides = Object.fromEntries(Object.entries(pending).map(([key, item]) => [key, () => item.promise]));
  const { component, state, payloads } = await load(overrides);
  const initial = requests.map(([, , group, field]) => state[group][field]);
  const mounted = component.mounted.call(state);
  component.beforeDestroy.call(state);
  state._isDestroyed = true;
  for (const [key, item] of Object.entries(pending)) item.resolve(payloads[key]);
  await mounted;
  requests.forEach(([, , group, field], index) => {
    assert.equal(state[group][field], initial[index], `${field} 不应被迟到的结果替换`);
  });
});
