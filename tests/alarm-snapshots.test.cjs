const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');
test('告警快照支持混合哨兵、缩短及清空列表', async () => {
  const { default: component } = await loadModule('src/components/public/TopNav.vue', {}, {
    '../../api/util': { alarmUrl: '', jsonFormat: event => JSON.parse(event.data) },
    '../../api/tisinghua-static.js': { alarmHandler() {} }, jquery: { default() {} }, axios: { default() {} }, '../../api/nevt': { base_api: '/api' }
  });
  const vm = { ws: {}, alarmData: [], alarmShow: false }; component.methods.receive.call(vm);
  const send = data => vm.ws.onmessage({ data: JSON.stringify({ data }) });
  send([{ dataStationId: 1, content: {} }, { dataStationId: 2, content: {} }, { dataStationId: 0 }]);
  assert.equal(vm.alarmShow, true); assert.equal(vm.alarmData.length, 2);
  send([{ dataStationId: 2, content: {} }]); assert.equal(vm.alarmData.length, 1); assert.equal(vm.alarmData[0].dataStationId, 2);
  send([]); assert.equal(vm.alarmShow, false); assert.equal(vm.alarmData.length, 0);
});
