const fs = require('node:fs');
const path = require('node:path');
const { loadModule } = require('./load-module.cjs');
async function loadComponent(file, globals = {}, dependencies = {}) {
  const source = fs.readFileSync(path.resolve(__dirname, '../..', file), 'utf8');
  const children = {};
  for (const match of source.matchAll(/import\s+[\w$]+\s+from\s+["']([^"']+\.vue)["']/g)) children[match[1]] = { default: {} };
  return (await loadModule(file, globals, { ...children, ...dependencies })).default;
}
module.exports = { loadComponent };
