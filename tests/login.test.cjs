const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule, storage } = require('./helpers/load-module.cjs');

async function loginComponent(request, fields = { username: 'user', password: 'password', remember: false }) {
  const localStorage = storage({ token: 'stale', username: 'previous' });
  const sessionStorage = storage();
  let cleared = 0;
  const { default: component } = await loadModule('src/view/login.vue', {
    localStorage, sessionStorage, setTimeout: () => 1, clearTimeout: () => {}
  }, {
    '../components/public/Scales.vue': { default: {} }, '../components/public/TopNav.vue': { default: {} },
    jquery: { default: selector => ({ val: () => fields[selector.slice(1)], prop: () => fields.remember, attr() {}, text() {} }) },
    axios: { default: request },
    '../api/nevt.js': { base_api: '/api', failLogin() {}, getFailLogin() {}, getFail: () => false, removeToken: () => {
      cleared += 1;
      localStorage.removeItem('token'); localStorage.removeItem('username');
      sessionStorage.removeItem('token'); sessionStorage.removeItem('username');
    } }
  });
  const instance = component.data();
  instance.$router = { push() {}, replace() {} };
  Object.entries(component.methods).forEach(([key, method]) => { instance[key] = method.bind(instance); });
  return { instance, localStorage, sessionStorage, cleared: () => cleared };
}

test('缺失位置脚本也能登录，同时清理旧的长期登录身份', async () => {
  let payload;
  const context = await loginComponent(async config => { payload = config.data; return { data: { code: 201, data: { token: 'current' } } }; });
  await context.instance.login();
  assert.equal(payload.address.cityName, null);
  assert.equal(context.cleared(), 1);
  assert.equal(context.localStorage.getItem('token'), null);
  assert.equal(context.sessionStorage.getItem('token'), 'current');
  assert.equal(context.instance.submitting, false);
});

test('空输入不发送请求，网络错误显示反馈并恢复提交', async () => {
  let calls = 0;
  const context = await loginComponent(() => { calls += 1; }, { username: '   ', password: '', remember: false });
  context.instance.login();
  assert.equal(calls, 0);
  assert.equal(context.instance.fail, true);
  const failed = await loginComponent(async () => { throw new Error('offline'); });
  await failed.instance.login();
  assert.match(failed.instance.failTxt, /网络/);
  assert.equal(failed.instance.submitting, false);
});

test('登录请求未完成时忽略重复提交', async () => {
  let finish;
  let calls = 0;
  const context = await loginComponent(() => { calls += 1; return new Promise(resolve => { finish = resolve; }); });
  const pending = context.instance.login();
  context.instance.login();
  assert.equal(calls, 1);
  finish({ data: { code: 400, message: '登录失败', data: 0 } });
  await pending;
  assert.equal(context.instance.submitting, false);
});
