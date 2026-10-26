const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

function deferred() {
  let resolve, reject;
  const promise = new Promise((done, fail) => { resolve = done; reject = fail; });
  return { promise, resolve, reject };
}

async function setup() {
  const requests = [], alerts = [];
  const { default: component } = await loadModule('src/components/public/TopNav.vue', {
    alert: message => alerts.push(message), clearInterval() {}, console: { log() {} }
  }, {
    '../../api/util': { alarmUrl: '', jsonFormat() {} },
    '../../api/tisinghua-static.js': { alarmHandler() {} },
    jquery: { default: selector => ({ val: () => selector === '#username' ? 'admin' : 'password' }) },
    axios: { default: config => {
      const pending = deferred();
      requests.push({ config, ...pending });
      return pending.promise;
    } },
    '../../api/nevt': { base_api: '/api' }
  });
  const vm = { ...component.data(), ws: { close() {} } };
  Object.entries(component.methods).forEach(([name, fn]) => { vm[name] = fn.bind(vm); });
  return { vm, component, requests, alerts };
}

const flush = () => new Promise(resolve => setImmediate(resolve));
const authorized = { data: { code: 201 } };
const removed = { data: { data: true } };

test('确认期间切换告警仍只提交原目标，旧结果不关闭新对话框', async () => {
  const { vm, requests, alerts } = await setup();
  vm.handlerAlarm('alarm-A', 'station');
  const pending = vm.login();
  vm.handlerAlarm('alarm-B', 'vehicle');
  requests[0].resolve(authorized); await flush();
  assert.equal(requests[1].config.url, '/dummy/removeAlarm');
  assert.equal(requests[1].config.params.dataStationId, 'alarm-A');
  assert.equal(requests[1].config.params.dataStationTypeId, 'station');
  requests[1].resolve(removed); await pending; await flush();
  assert.equal(vm.adminConfirm, true);
  assert.equal(vm.alarmSubmitting, false);
  assert.deepEqual(alerts, []);

  const next = vm.login();
  requests[2].resolve(authorized); await flush();
  assert.equal(requests[3].config.params.dataStationId, 'alarm-B');
  requests[3].resolve(removed); await next; await flush();
  assert.equal(vm.adminConfirm, false);
  assert.deepEqual(alerts, ['success']);
});

test('同一确认在认证和处置请求期间均防止重复提交', async () => {
  const { vm, requests, alerts } = await setup();
  vm.handlerAlarm('alarm-A', 'station');
  const pending = vm.login();
  vm.login();
  assert.equal(requests.length, 1);
  assert.equal(vm.alarmSubmitting, true);
  requests[0].resolve(authorized); await flush();
  vm.login();
  assert.equal(requests.length, 2);
  requests[1].resolve(removed); await pending; await flush();
  assert.equal(vm.alarmSubmitting, false);
  assert.equal(vm.adminConfirm, false);
  assert.deepEqual(alerts, ['success']);
});

test('切换后重新选择同一告警也不接收旧处置结果', async () => {
  const { vm, requests, alerts } = await setup();
  vm.handlerAlarm('alarm-A', 'station');
  const pending = vm.login();
  requests[0].resolve(authorized); await flush();
  vm.handlerAlarm('alarm-B', 'vehicle');
  vm.handlerAlarm('alarm-A', 'station');
  requests[1].resolve(removed); await pending; await flush();
  assert.equal(vm.adminConfirm, true);
  assert.deepEqual(alerts, []);
});

test('认证拒绝或网络及处置失败后保留对话框并允许重试', async t => {
  for (const failure of ['login-denied', 'login-network', 'remove-denied', 'remove-network']) {
    await t.test(failure, async () => {
      const { vm, requests, alerts } = await setup();
      vm.handlerAlarm('alarm-A', 'station');
      const pending = vm.login();
      if (failure === 'login-denied') requests[0].resolve({ data: { code: 401 } });
      else if (failure === 'login-network') requests[0].reject(new Error('offline'));
      else {
        requests[0].resolve(authorized); await flush();
        if (failure === 'remove-denied') requests[1].resolve({ data: { data: false } });
        else requests[1].reject(new Error('offline'));
      }
      await pending; await flush();
      assert.equal(vm.adminConfirm, true);
      assert.equal(vm.alarmSubmitting, false);
      assert.equal(alerts.length, 1);
      const beforeRetry = requests.length;
      const retry = vm.login();
      assert.equal(requests.length, beforeRetry + 1);
      requests[beforeRetry].resolve(authorized); await flush();
      requests[beforeRetry + 1].resolve(removed); await retry; await flush();
      assert.equal(vm.adminConfirm, false);
    });
  }
});

test('切换告警后迟到的失败不干扰新的确认', async () => {
  const { vm, requests, alerts } = await setup();
  vm.handlerAlarm('alarm-A', 'station');
  const pending = vm.login();
  vm.handlerAlarm('alarm-B', 'vehicle');
  requests[0].resolve({ data: { code: 401 } }); await pending; await flush();
  assert.equal(requests.length, 1);
  assert.equal(vm.adminConfirm, true);
  assert.equal(vm.alarmSubmitting, false);
  assert.deepEqual(alerts, []);
});

test('卸载后认证响应不再发出处置请求，处置响应不再显示提示', async t => {
  for (const phase of ['login', 'remove']) {
    await t.test(phase, async () => {
      const { vm, component, requests, alerts } = await setup();
      vm.handlerAlarm('alarm-A', 'station');
      const pending = vm.login();
      if (phase === 'remove') { requests[0].resolve(authorized); await flush(); }
      component.beforeDestroy.call(vm);
      requests[requests.length - 1].resolve(phase === 'login' ? authorized : removed);
      await pending; await flush();
      assert.equal(requests.length, phase === 'login' ? 1 : 2);
      assert.deepEqual(alerts, []);
      assert.equal(vm.adminConfirm, true);
      vm.login();
      assert.equal(requests.length, phase === 'login' ? 1 : 2);
    });
  }
});
