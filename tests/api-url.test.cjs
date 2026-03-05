const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('HTTPS 页面使用加密 WebSocket，参数可无损传输特殊字符', async () => {
  const api = await loadModule('src/api/util.js', { location: { protocol: 'https:', host: 'example.test', href: '' } });
  assert.equal(api.baseUrl, 'wss://example.test/ws');
  assert.equal(api.alarmUrl, 'wss://example.test/ws?alarm=true');
  assert.equal(api.creat_ws_api(10003, '车 & 1', 'a=b', 'x/y'), '?type=10003&station=%E8%BD%A6%20%26%201&device=a%3Db&param=x%2Fy');
  assert.equal(api.creat_ws_param_api(10003, 'A&B', '温度 +'), 'wss://example.test/ws?type=10003&station=A%26B&paramName=%E6%B8%A9%E5%BA%A6%20%2B');
  assert.equal(api.allValues(10003, 'A&B'), 'wss://example.test/ws?type=10003&station=A%26B&all');
});

test('URL 参数支持 hash 路由、加号和字面量键名，错误转义不抛异常', async () => {
  const location = { protocol: 'http:', host: 'localhost:8080', href: 'http://localhost/#/view?station=A+B&value.key=%E4%B8%AD&bad=%E0%A4%A' };
  const api = await loadModule('src/api/util.js', { location });
  assert.equal(api.baseUrl, 'ws://localhost:8080/ws');
  assert.equal(api.getUrlKey('station'), 'A B');
  assert.equal(api.getUrlKey('value.key'), '中');
  assert.equal(api.getUrlKey('valueXkey'), 404);
  assert.equal(api.getUrlKey('bad'), 404);
  assert.equal(api.getUrlKey('absent'), 404);
});
