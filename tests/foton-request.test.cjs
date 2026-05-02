const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('车辆接口请求异常和业务失败保持拒绝状态，成功响应保留原对象', async () => {
  let requestFailure;
  let responseSuccess;
  const service = { interceptors: {
    request: { use: (_, failure) => { requestFailure = failure; } },
    response: { use: success => { responseSuccess = success; } }
  } };
  await loadModule('src/request.js', {}, { axios: { default: { create: () => service } } });
  const failure = new Error('offline');
  await assert.rejects(requestFailure(failure), error => error === failure);
  const rejected = { data: { type: 'error', message: '设备离线' } };
  await assert.rejects(responseSuccess(rejected), error => error.message === '设备离线' && error.response === rejected);
  await assert.rejects(responseSuccess({ data: null }), /车辆数据请求失败/);
  const accepted = { data: { type: 'success', data: [] } };
  assert.equal(responseSuccess(accepted), accepted);
});

test('多车查询端点没有不可见尾部字符', async () => {
  let request;
  const api = await loadModule('src/api/foton.js', {}, { '@/request': { default: config => { request = config; } } });
  const vehicles = { vins: ['TESTVIN'] };
  api.getByVins(vehicles);
  assert.equal(request.url, '/openapi/iov/business/location/getByVins.json');
  assert.equal(request.data, vehicles);
});
