const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');
test('单序列统计图不生成空名的额外序列，合法空数组仍可更新', async () => {
  const charts = await loadModule('src/assets/js/table.js', {}, { echarts: { default: {} }, jquery: { data: {} } });
  for (const name of ['eb_f', 'eb_line', 'eb_bar_double', 'eb_line_double']) {
    let option; const target = { setOption: value => option = value };
    const max = name.includes('double') ? [10, 10] : 10;
    charts[name]([[1]], ['red'], ['count'], ['x', 'y'], ['1'], max, target, false);
    assert.equal(option.series.length, 1, name); assert.equal(option.series[0].name, 'count', name);
    charts[name]([[]], ['red'], ['count'], ['x', 'y'], [], max, target, false);
    assert.equal(option.series.length, 1, name); assert.equal(option.series[0].data.length, 0, name);
  }
});
