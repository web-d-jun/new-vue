module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/style/index.scss";`,
      },
    },
  },
};
