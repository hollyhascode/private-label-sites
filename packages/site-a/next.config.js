const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@acme/blog", "@acme/design"]);

module.exports = withPlugins([withTM], {});
