module.exports = {
  getBabelConfig: module => {
    return {
      presets: ["next/babel"],
      plugins: [
        [
          "module-resolver",
          {
            root: [__dirname + "/src"],
            alias: {
              components: __dirname + "/src/components",
              extensions: __dirname + "/src/extensions",
            },
          },
        ],
      ],
    };
  },
};
