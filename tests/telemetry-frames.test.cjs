const assert = require('node:assert/strict');
const test = require('node:test');
const { loadComponent } = require('./helpers/load-component.cjs');
const { loadModule } = require('./helpers/load-module.cjs');
const location = { protocol: 'https:', host: 'example.test', href: 'https://example.test/?id=1&carId=2&carrierId=3' };
const cases = [
  ['src/view/hydrogenation-simple.vue', 'dataBottom'],
  ['src/view/fuel-cell-vehicle-simple.vue', 'dataTop'],
  ['src/view/fuel-cell-vehicle-simple-fc-info.vue', 'dataRight'],
  ['src/view/transport-simple.vue', 'carrierData'],
  ['src/components/hydrogenation-simple/Hydrogenation-machine/MMid.vue', 'paramValue']
];
test('遥测页忽略损坏、空值及结构错误的帧，后续有效帧仍可更新', async () => {
  const util = await loadModule('src/api/util.js', { location });
  for (const frame of ['broken', 'null', '[]']) assert.equal(util.jsonFormat({ data: frame }), null);
  for (const [file, key] of cases) {
    const component = await loadComponent(file, { location }, { axios: { default: () => { throw new Error('network forbidden'); } } });
    const vm = { ws: {}, [key]: { retained: true } };
    component.methods.receive.call(vm);
    for (const data of ['broken', 'null', '{}', '{"data":null}', '{"data":{"content":[]}}']) vm.ws.onmessage({ data });
    assert.equal(vm[key].retained, true, file);
    vm.ws.onmessage({ data: '{"data":{"content":{"measurement":42}}}' });
    assert.equal(vm[key].measurement, 42, file);
  }
});
