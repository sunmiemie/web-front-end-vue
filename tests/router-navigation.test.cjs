const assert = require('node:assert/strict');
const test = require('node:test');
const { loadModule } = require('./helpers/load-module.cjs');

test('只忽略重复导航，真实错误继续向调用方传播并保留回调API', async () => {
  class Router {
    beforeEach() {}
    push(location, onComplete, onAbort) {
      if (onComplete) { onComplete(location); return undefined; }
      if (onAbort) { onAbort(location); return undefined; }
      return Promise.reject(location);
    }
    replace(...args) { return Router.originalPush.apply(this, args); }
  }
  Router.originalPush = Router.prototype.push;
  const { default: router } = await loadModule('src/router/index.js', {}, {
    vue: { default: { use() {} } }, 'vue-router': { default: Router },
    '../api/nevt.js': { verifyToken() {}, returnToken() {}, returnUsername() {} }
  });
  for (const method of ['push', 'replace']) {
    const duplicate = { name: 'NavigationDuplicated' };
    assert.equal(await router[method](duplicate), duplicate);
    const failure = new Error('guard failed');
    await assert.rejects(router[method](failure), error => error === failure);
    let completed;
    assert.equal(router[method]('/index', path => { completed = path; }), undefined);
    assert.equal(completed, '/index');
  }
});
