const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('缩放容器卸载后释放同一个 resize 监听器', async () => {
  const listeners = new Set();
  const window = {
    addEventListener: (_, callback) => listeners.add(callback),
    removeEventListener: (_, callback) => listeners.delete(callback)
  };
  const { default: component } = await loadModule('src/components/public/Scales.vue', {
    window, document: { documentElement: { offsetWidth: 960, offsetHeight: 540 } }
  });
  const instance = component.data();
  Object.entries(component.methods).forEach(([key, method]) => { instance[key] = method.bind(instance); });
  component.mounted.call(instance);
  assert.equal(listeners.size, 1);
  assert.equal(instance.scales.transform, 'translate3d(0px, 0, 0) scale(0.5)');
  instance.changeHight();
  assert.equal(listeners.size, 1);
  component.beforeDestroy.call(instance);
  assert.equal(listeners.size, 0);
});
