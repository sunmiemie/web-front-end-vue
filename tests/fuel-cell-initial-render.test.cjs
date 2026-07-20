const assert = require('node:assert/strict');
const test = require('node:test');
const fs = require('node:fs');
const Vue = require('vue');
const compiler = require('vue-template-compiler');
const { loadComponent } = require('./helpers/load-component.cjs');
test('燃料电池详情在第一帧遥测到达前完整渲染', async () => {
  const file = 'src/view/fuel-cell-vehicle-simple-fc-info.vue';
  const component = await loadComponent(file, { location: { protocol: 'https:', host: 'example.test' } }, { axios: { default() {} } });
  const compiled = compiler.compileToFunctions(compiler.parseComponent(fs.readFileSync(file, 'utf8')).template.content);
  const errors = []; const original = Vue.config.errorHandler; Vue.config.errorHandler = error => errors.push(error);
  try {
    const vm = new Vue({ ...compiled, data: component.data, components: component.components, methods: component.methods });
    const vnode = vm._render();
    assert.equal(errors.length, 0); assert.ok(vnode.tag);
    vm.$destroy();
  } finally { Vue.config.errorHandler = original; }
});
