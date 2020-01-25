module.exports = {
  stories: ["../src/**/*.stories.[tj]s", "../src/**/*.stories.[tj]sx"],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    return config;
  },
};
