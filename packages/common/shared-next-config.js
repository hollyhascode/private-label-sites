module.exports = {
  makeNextConfig() {
    const withPlugins = require("next-compose-plugins");
    const withTM = require("next-transpile-modules")(["@erig"]);
    return withPlugins([withTM], {});
  },
};
