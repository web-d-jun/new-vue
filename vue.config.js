/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~img': path.join(__dirname, 'src/assets/img'),
        '~common_ts': path.join(__dirname, 'src/common/ts'),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/style/index.scss";`,
      },
    },
  },
};
