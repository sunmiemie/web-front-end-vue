const assert = require('node:assert/strict');
const test = require('node:test');
const { loadComponent } = require('./helpers/load-component.cjs');
const { storage } = require('./helpers/load-module.cjs');
async function setup(request) {
  const saved = storage(); let navigations = 0, clears = 0, timers = 0;
  const component = await loadComponent('src/view/login.vue', { localStorage: saved, sessionStorage: saved, setTimeout() { timers++; }, clearTimeout() {} }, {
    jquery: { default: selector => ({ val: () => selector === '#username' ? 'user' : 'password', prop: () => false, attr() {}, text() {} }) }, axios: { default: request },
    '../api/nevt.js': { base_api: '/api', failLogin() {}, getFailLogin() {}, getFail: () => false, removeToken() { clears++; } }
  });
  const vm = { ...component.data(), $router: { push() { navigations++; }, replace() {} } };
  Object.entries(component.methods).forEach(([name, fn]) => vm[name] = fn.bind(vm));
  return { component, vm, saved, result: () => ({ navigations, clears, timers }) };
}
test('离开登录页后，迟到的响应不写入身份、不跳转、不创建计时器', async () => {
  let resolve; const context = await setup(() => new Promise(done => resolve = done));
  const pending = context.vm.login(); context.component.beforeDestroy.call(context.vm);
  resolve({ data: { code: 201, data: { token: 'late-token' } } }); await pending;
  assert.equal(context.saved.getItem('token'), null);
  assert.deepEqual(context.result(), { navigations: 0, clears: 0, timers: 0 });
});
test('成功状态却缺少 token 时保留原会话并显示失败', async () => {
  const context = await setup(async () => ({ data: { code: 201, data: {} } }));
  context.saved.setItem('token', 'previous'); await context.vm.login();
  assert.equal(context.saved.getItem('token'), 'previous'); assert.equal(context.vm.fail, true);
  assert.equal(context.result().clears, 0); assert.equal(context.result().navigations, 0);
});
