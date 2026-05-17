const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const Vue = require('vue');
const compiler = require('vue-template-compiler');
const { loadModule } = require('./helpers/load-module.cjs');
const mapComponents = Object.fromEntries(['BaiduMap', 'BmCityList', 'BmDriving', 'BmGeolocation', 'BmLabel', 'BmlMarkerClusterer', 'BmMarker', 'BmScale'].map(name => [name, { name, render(h) { return h('div', this.$slots.default); } }]));
async function load() {
  return (await loadModule('src/components/public/BaiduMap.vue', { require: value => value }, {
    'vue-baidu-map': mapComponents, jquery: { default: () => {} },
    '../../api/tisinghua-static': { allOnlineCar: async () => [{ id: 'online' }], allOfflineCar: async () => [{ id: 'offline' }], allFactoryAddr: async () => [], allStationAddr: async () => [], allCarrierAddr: async () => [{ id: 'carrier', longitude: 116, latitude: 40 }] }
  })).default;
}
test('在线、离线车辆对应正确接口，运输车列表可实际渲染', async () => {
  const component = await load(); const state = component.data();
  await component.mounted.call(state);
  assert.equal(state.onlineCarList[0].id, 'online'); assert.equal(state.offlineCarList[0].id, 'offline');
  const template = compiler.parseComponent(fs.readFileSync('src/components/public/BaiduMap.vue', 'utf8')).template.content;
  const compiled = compiler.compileToFunctions(template);
  const vm = new Vue({ ...component, ...compiled, data: () => state, propsData: { carrierShow: true, carShow: false, dShow: false } });
  vm.require = value => value;
  const nodes = [];
  const visit = vnode => { if (!vnode) return; nodes.push(vnode); (vnode.children || []).forEach(visit); if (vnode.componentOptions) (vnode.componentOptions.children || []).forEach(visit); };
  visit(vm._render());
  const carrier = nodes.find(node => node.key === 'carrier');
  assert.ok(carrier); assert.equal(carrier.data.attrs.position.lng, 116);
  vm.$destroy();
});
