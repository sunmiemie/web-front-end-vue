const assert = require('node:assert/strict');
const test = require('node:test');
const { loadComponent } = require('./helpers/load-component.cjs');
const files = ['src/view/hydrogenation-simple.vue', 'src/view/fuel-cell-vehicle-simple.vue', 'src/view/fuel-cell-vehicle-simple-fc-info.vue', 'src/view/transport-simple.vue', 'src/components/hydrogenation-simple/Hydrogenation-machine/MMid.vue'];
test('连接创建时立即订阅，卸载时解绑回调并安全关闭', async () => {
  for (const file of files) {
    let closed = 0; const socket = { close() { closed++; } };
    const component = await loadComponent(file, { clearInterval() {}, location: { protocol: 'https:', host: 'example.test', href: 'https://example.test/?id=1' } }, { axios: { default() { throw new Error('network forbidden'); } } });
    const vm = { ...component.data(), websocket: { ws: () => socket } };
    for (const [key, fn] of Object.entries(component.methods)) vm[key] = fn.bind(vm);
    component.created.call(vm);
    assert.equal(typeof socket.onmessage, 'function', file);
    component.beforeDestroy.call(vm);
    assert.equal(socket.onmessage, null); assert.equal(socket.onopen, null); assert.equal(closed, 1);
    assert.doesNotThrow(() => component.beforeDestroy.call(vm));
  }
});
