const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// 在独立上下文执行实际源码；网络、浏览器和第三方依赖由测试显式替换。
async function loadModule(relativePath, globals = {}, dependencies = {}) {
  const filename = path.resolve(__dirname, '../..', relativePath);
  const context = vm.createContext({ console, ...globals });
  const modules = new Map();
  async function read(filename) {
    if (modules.has(filename)) return modules.get(filename);
    let source = fs.readFileSync(filename, 'utf8');
    if (filename.endsWith('.vue')) source = source.match(/<script[^>]*>([\s\S]*?)<\/script>/)[1];
    const module = new vm.SourceTextModule(source, { context, identifier: filename });
    modules.set(filename, module);
    await module.link(async (specifier, importer) => {
      if (Object.prototype.hasOwnProperty.call(dependencies, specifier)) {
        const values = dependencies[specifier];
        return new vm.SyntheticModule(Object.keys(values), function () {
          Object.entries(values).forEach(([key, value]) => this.setExport(key, value));
        }, { context });
      }
      let resolved = path.resolve(path.dirname(importer.identifier), specifier);
      if (!path.extname(resolved)) resolved += '.js';
      return read(resolved);
    });
    return module;
  }
  const module = await read(filename);
  await module.evaluate();
  return module.namespace;
}

function storage(initial = {}) {
  const values = new Map(Object.entries(initial));
  return {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
    clear: () => values.clear()
  };
}

module.exports = { loadModule, storage };
