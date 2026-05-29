const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');
test('路线配色循环且限定当前地图，缺少图标地址不会抛错', async () => {
  const root = {}; const paths = Array.from({ length: 7 }, () => ({})); const image = {};
  const $ = target => ({
    find(selector) { assert.equal(target, root); return { each(callback) { (selector === '[stroke-linejoin]' ? paths : [image]).forEach((element, index) => callback(index, element)); } }; },
    attr(value) { if (value === 'src') return undefined; Object.assign(target, value); }
  });
  const names = ['BaiduMap', 'BmCityList', 'BmDriving', 'BmGeolocation', 'BmLabel', 'BmlMarkerClusterer', 'BmMarker', 'BmScale'];
  const { default: component } = await loadModule('src/components/public/BaiduMap.vue', {}, {
    'vue-baidu-map': Object.fromEntries(names.map(name => [name, {}])), jquery: { default: $ },
    '../../api/tisinghua-static': Object.fromEntries(['allOnlineCar', 'allOfflineCar', 'allFactoryAddr', 'allStationAddr', 'allCarrierAddr'].map(name => [name, () => {}]))
  });
  const vm = { $el: root }; Object.entries(component.methods).forEach(([name, fn]) => vm[name] = fn.bind(vm));
  vm.changePathColor(true);
  assert.ok(paths.every(path => typeof path.stroke === 'string'));
  assert.equal(paths[0].stroke, paths[4].stroke);
});
