const inheritance_loader = require('./vue-inheritance-sync').resolve;
const path = require('path');
const vue_jest = require('vue-jest');

module.exports = {
  process: function (src, filePath, jestConfig) {
    let basePath = path.dirname(filePath);

    // jestConfig.moduleNameMapper example: [["^@/(.*)$", "C:\path\to\src\$1"]]. Turn it to {"^@/(.*)$": "C:\path\to\src\$1"}
    let aliases = jestConfig.moduleNameMapper.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum
    }, {});
    aliases['__fromJest'] = true;
    let result = inheritance_loader(src, basePath, aliases)

    let processed_src = result.source;
    return vue_jest.process(processed_src, filePath, jestConfig);
  }
};