const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');
test('滑块与鼠标缩放使用相同初始区间，避免首屏数据相互覆盖', async () => {
  const charts = await loadModule('src/assets/js/table.js', {}, { echarts: { default: {} }, jquery: { data: {} } });
  const outputs = []; const target = { setOption: option => outputs.push(option) };
  charts.eb_f([[1]], ['red'], ['count'], ['x', 'y'], ['1'], 10, target, false, true);
  charts.eb_line([[1]], ['red'], ['count'], ['x', 'y'], ['1'], 10, target, true);
  charts.eb_bar_double([[1], [2]], ['red', 'blue'], ['a', 'b'], ['x', 'y', 'z'], ['1'], [10, 20], target, true);
  charts.eb_line_double([[1], [2]], ['red', 'blue'], ['a', 'b'], ['x', 'y', 'z'], ['1'], [10, 20], target, true);
  charts.eb_f_line([1], [2], ['red', 'blue'], ['a', 'b'], target, true, 10, ['line', 'bar'], ['x', 'y']);
  for (const option of outputs) { const [slider, inside] = option.dataZoom; assert.equal(inside.start, slider.start); assert.equal(inside.end, slider.end); }
});
