const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule, storage } = require('./helpers/load-module.cjs');

test('退出登录只清理本应用身份，保留其他存储数据及登录限制', async () => {
  const localStorage = storage({ token: 'old', username: 'user', 'fail-login-number': '1000', layout: 'wide' });
  const sessionStorage = storage({ token: 'session', username: 'user', draft: 'work' });
  const api = await loadModule('src/api/nevt.js', { localStorage, sessionStorage }, { axios: { default: () => {} } });
  api.removeToken();
  assert.equal(localStorage.getItem('token'), null);
  assert.equal(sessionStorage.getItem('username'), null);
  assert.equal(localStorage.getItem('layout'), 'wide');
  assert.equal(sessionStorage.getItem('draft'), 'work');
  assert.equal(localStorage.getItem('fail-login-number'), '1000');
});

test('每次连接使用当前会话凭据，并支持未勾选记住我的登录', async () => {
  const localStorage = storage();
  const sessionStorage = storage({ token: 'session-token' });
  const calls = [];
  const WebSocket = function (url, protocols) { calls.push([url, Array.from(protocols)]); };
  const module = await loadModule('src/api/websocket.js', { localStorage, sessionStorage, WebSocket }, { axios: { default: () => {} } });
  module.default.ws('wss://example.test/ws');
  sessionStorage.setItem('token', 'refreshed-token');
  module.default.ws('wss://example.test/ws');
  assert.deepEqual(calls, [['wss://example.test/ws', ['session-token']], ['wss://example.test/ws', ['refreshed-token']]]);
  sessionStorage.removeItem('token');
  assert.throws(() => module.default.ws('wss://example.test/ws'), /登录/);
  assert.equal(calls.length, 2);
});

test('登录限制在到期或缓存损坏时可恢复', async () => {
  const localStorage = storage();
  const api = await loadModule('src/api/nevt.js', { localStorage, sessionStorage: storage(), Date: { now: () => 1000 } }, { axios: { default: () => {} } });
  api.failLogin(500);
  assert.equal(api.getFail(), true);
  api.getFailLogin(1500);
  assert.equal(api.getFail(), false);
  localStorage.setItem('fail-login-number', 'broken');
  assert.equal(api.getFail(), false);
});
