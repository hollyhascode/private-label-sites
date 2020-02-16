const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@erig"]);

module.exports = withPlugins([withTM], {});
