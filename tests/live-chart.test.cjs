const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('演示曲线只在挂载时启动，暂停与卸载释放资源，实例数据相互隔离', async () => {
  const timers = new Set();
  const resizeListeners = new Set();
  let initialized = 0;
  let disposed = 0;
  let draws = 0;
  const module = await loadModule('src/components/public/live-chart.js', {
    setInterval: callback => { timers.add(callback); return callback; },
    clearInterval: timer => timers.delete(timer),
    window: { addEventListener: (_, callback) => resizeListeners.add(callback), removeEventListener: (_, callback) => resizeListeners.delete(callback) }
  }, { '../../assets/js/table': { eb_line: () => { draws += 1; } } });
  assert.equal(timers.size, 0);
  const component = module.default({ ranges: [[30, 20]], colors: ['blue'], titles: ['示例'], units: ['s'], timeUnit: 'second', interval: 1000 });
  const instance = component.data();
  const other = component.data();
  assert.notEqual(instance.series[0], other.series[0]);
  instance.$el = {};
  instance.$echarts = { init: () => { initialized += 1; return { resize() {}, dispose: () => { disposed += 1; } }; } };
  Object.entries(component.methods).forEach(([key, value]) => { instance[key] = value.bind(instance); });
  component.mounted.call(instance);
  instance.startMin(); instance.startMin();
  assert.equal(timers.size, 1);
  Array.from(timers)[0]();
  assert.equal(instance.series[0].length, 30);
  assert.equal(initialized, 1);
  assert.equal(draws, 2);
  instance.stopInterVal();
  assert.equal(timers.size, 0);
  instance.startMin();
  component.beforeDestroy.call(instance);
  assert.equal(timers.size, 0);
  assert.equal(resizeListeners.size, 0);
  assert.equal(disposed, 1);
});
