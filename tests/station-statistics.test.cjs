const assert = require('node:assert/strict');
const test = require('node:test');
const { loadComponent } = require('./helpers/load-component.cjs');
test('单项统计失败保留可渲染占位，其余请求继续显示零及有效数据', async () => {
  const component = await loadComponent('src/view/hydrogenation-simple.vue', { location: { protocol: 'https:', host: 'example.test', href: 'https://example.test/?id=1' } }, {
    '../api/tisinghua-static': { statisticalAdd: async ({ date }) => { if (date === 'day') throw new Error('offline'); return date === 'month' ? { data: 0 } : 123; }, statisticalAlarm: async () => undefined, vinByDataStationId() {} }
  });
  const vm = component.data(); await component.mounted.call(vm);
  assert.equal(vm.addData.addDay.data, null); assert.equal(vm.addData.addMonth.data, 0);
  assert.equal(vm.addData.addYear.data, 123); assert.equal(vm.addData.alarm.data, null);
});
