const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const path = require('node:path');
const { loadModule } = require('./helpers/load-module.cjs');
test('静态图表互不覆盖 resize，重复绘制复用实例，卸载释放资源', async () => {
  const listeners = new Set(); const charts = [];
  const { default: mixin } = await loadModule('src/components/public/chart-lifecycle.js', { window: { addEventListener: (type, fn) => listeners.add(fn), removeEventListener: (type, fn) => listeners.delete(fn) } });
  function instance() { return { $el: { id: 'same-id' }, $echarts: { init() { const chart = { resizes: 0, disposes: 0, resize() { this.resizes++; }, dispose() { this.disposes++; } }; charts.push(chart); return chart; } } }; }
  const a = instance(), b = instance();
  const chart = mixin.methods.createChart.call(a, 'same-id');
  assert.equal(mixin.methods.createChart.call(a, 'same-id'), chart);
  mixin.methods.createChart.call(b, 'same-id');
  for (const fn of listeners) fn(); assert.deepEqual(charts.map(c => c.resizes), [1, 1]);
  mixin.beforeDestroy.call(a); assert.equal(listeners.size, 1); assert.equal(chart.disposes, 1);
  mixin.beforeDestroy.call(b); assert.equal(listeners.size, 0);
});
test('所有原静态图表挂载均使用组件内实例管理', async () => {
  const files = [];
  const scan = folder => { for (const entry of fs.readdirSync(folder, { withFileTypes: true })) { const file = path.join(folder, entry.name); if (entry.isDirectory()) scan(file); else if (file.endsWith('.vue') && fs.readFileSync(file, 'utf8').includes('mixins: [chartLifecycle]')) files.push(file); } };
  scan('src/components'); assert.ok(files.length > 0);
  for (const file of files) {
    const source = fs.readFileSync(file, 'utf8');
    const dependencies = { axios: { default() { throw new Error("network forbidden"); } } };
    for (const match of source.matchAll(/import\s*\{([^}]+)\}\s*from\s*["']([^"']+table\.js)["']/g)) dependencies[match[2]] = Object.fromEntries(match[1].split(',').map(name => [name.trim(), () => {}]));
    const { default: component } = await loadModule(file, {}, dependencies);
    let initialized = 0; const vm = { createChart() { initialized++; return {}; } };
    component.methods.drawLine.call(vm); assert.equal(initialized, (source.match(/this.createChart\(/g) || []).length, file); assert.equal(component.mixins.length, 1, file);
  }
});
