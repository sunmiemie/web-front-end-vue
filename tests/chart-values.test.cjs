const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('图表上界基于真正最大值且保留小数留白', async () => {
  const api = await loadModule('src/assets/js/public.js');
  assert.equal(api.data_max([10, 14]), 19);
  assert.equal(api.data_max([14, 10]), 19);
  assert.equal(api.data_max(['12.5', 10, NaN, null]), 18);
  assert.equal(api.data_max_list([[10, 14], [17]]), 22);
  assert.equal(api.data_max([]), 0);
});

test('图表日期在月底和跨年时不会出现负日期或漏掉当月数据', async () => {
  class FixedDate extends Date {
    constructor(...args) { super(...(args.length ? args : [2026, 0, 31, 0, 0, 5])); }
  }
  const api = await loadModule('src/assets/js/public.js', { Date: FixedDate });
  assert.equal(api.x_date('day').length, 31);
  assert.equal(api.x_date('day')[30], '1月31日');
  const minutes = Array.from(api.x_date('min'));
  assert.equal(minutes.length, 30);
  assert.equal(minutes[0], '23:30');
  assert.equal(minutes[29], '23:59');
  const seconds = Array.from(api.x_date('second'));
  assert.equal(seconds[0], '23:59:35');
  assert.equal(seconds[29], '00:00:04');
  assert.equal(new Set(seconds).size, 30);
});

test('最近七天在月初自动回到上一年', async () => {
  class FixedDate extends Date {
    constructor(...args) { super(...(args.length ? args : [2026, 0, 2, 12, 0, 0])); }
  }
  const api = await loadModule('src/assets/js/public.js', { Date: FixedDate });
  assert.deepEqual(Array.from(api.x_date('week')), ['12月26', '12月27', '12月28', '12月29', '12月30', '12月31', '1月1']);
});
