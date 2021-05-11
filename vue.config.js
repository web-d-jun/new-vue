/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const routes = require('./seo.json');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),

        routes: ['/design'],
        renderer: new Renderer({
          // Optional - The name of the property to add to the window object with the contents of `inject`.
          // Optional - Any values you'd like your app to have access to via `window.injectProperty`.

          // Optional - defaults to 0, no limit.
          // Routes are rendered asynchronously.
          // Use this to limit the number of routes rendered in parallel.

          // Optional - Wait to render until a certain amount of time has passed.
          // NOT RECOMMENDED
          renderAfterTime: 5000, // Wait 5 seconds.

          // Other puppeteer options.
          // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
          headless: true, // Display the browser window when rendering. Useful for debugging.
        }),
      }),
    ],
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
