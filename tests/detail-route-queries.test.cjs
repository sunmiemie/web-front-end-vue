const assert = require('node:assert/strict');
const test = require('node:test');
const { loadComponent } = require('./helpers/load-component.cjs');
test('详情页共享安全查询解析，非法百分号编码不会中断挂载', async () => {
  for (const file of ['production-simple', 'machine-info', 'h-can-and-compressor', 'fuel-cell-vehicle-simple-fc-info']) {
    const location = { protocol: 'https:', host: 'example.test', href: 'https://example.test/#/detail?name=%E0%A4&carId=0' };
    const component = await loadComponent('src/view/' + file + '.vue', { location }, { axios: { default() {} } });
    assert.doesNotThrow(() => component.methods.getUrlKey('name'), file);
    assert.equal(component.methods.getUrlKey('carId'), '0', file);
    location.href = 'https://example.test/#/detail?name=North+Station';
    assert.equal(component.methods.getUrlKey('name'), 'North Station', file);
  }
});
