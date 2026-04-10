const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('导航时钟重复启动和卸载时不会残留计时器或告警连接', async () => {
  const timers = new Set();
  let closed = 0;
  const { default: component } = await loadModule('src/components/public/TopNav.vue', {
    setInterval: callback => { timers.add(callback); return callback; },
    clearInterval: timer => timers.delete(timer)
  }, {
    '../../api/util': { alarmUrl: 'wss://example.test/ws', jsonFormat: () => {} },
    '../../api/tisinghua-static.js': { alarmHandler: () => {} },
    jquery: { default: () => {} }, axios: { default: () => {} },
    '../../api/nevt': { base_api: '/api' }
  });
  const instance = component.data();
  instance.ws = { onmessage: () => {}, close: () => { closed += 1; } };
  component.methods.timeRefresh.call(instance);
  component.methods.timeRefresh.call(instance);
  assert.equal(timers.size, 1);
  component.beforeDestroy.call(instance);
  assert.equal(timers.size, 0);
  assert.equal(instance.ws.onmessage, null);
  assert.equal(closed, 1);
});
