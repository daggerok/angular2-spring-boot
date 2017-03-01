const historyFallback = require('connect-history-api-fallback');

module.exports = {
  port: 3000,
  files: [
    './src/**/*.*',
  ],
  server: {
    baseDir: '../src/main/resources/static/',
    middleware: {
      // overrides the second middleware default with new settings
      1: historyFallback({
        index: '/index.html',
        verbose: true,
      }),
    }
  }
};
