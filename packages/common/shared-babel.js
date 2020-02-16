module.exports = {
  getBabelConfig: module => {
    return {
      presets: ["next/babel"],
      plugins: [
        [
          "module-resolver",
          {
            root: ["./src"],
            alias: {
              extensions: "./src/extensions",
            },
          },
        ],
      ],
    };
  },
};
