const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');
test('FC 电流电压按千瓦显示，保留零值并区分缺失测量', async () => {
  const { default: component } = await loadModule('src/components/fuel-cell-vehicle-simple/top/VSData.vue');
  const power = data => component.computed.powerKw.call({ VSData: data });
  assert.equal(power({ fcCurrent: 100, fcVoltage: 300 }), 30);
  assert.equal(power({ fcCurrent: 0, fcVoltage: 300 }), 0);
  assert.equal(power({ fcCurrent: '1.25', fcVoltage: '230' }), 0.29);
  assert.equal(power({ fcCurrent: null, fcVoltage: 300 }), '-');
  assert.equal(power({}), '-');
});
