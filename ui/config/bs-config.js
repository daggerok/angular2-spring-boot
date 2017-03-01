// all requests to /api/** => will redirect on http://localhost:8080/api/**
const httpProxyMiddleware = require('http-proxy-middleware');
const localhost8080proxyApi = httpProxyMiddleware('/api', {
  target: 'http://localhost:8080',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug'
});

// fallback for react-routes
const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
  server: {
    always: 'index.html',

    baseDir: './dist',

    middleware: [
      // proxy
      localhost8080proxyApi,
      // historyApiFallback
      historyApiFallback({
        index: '/angularjs/'
      })
    ],
  },

  files: [
    './index.html',
    './dist/**/*.*'
  ],

  startPath: '/angularjs/',

  serveStatic: [
    './dist'
  ],

  /**
   * default config
   */

  'ui': {
    'port': 3001,
    'weinre': {
      'port': 8001
    }
  },
  'watchOptions': {},
  'proxy': false,
  'port': 8000,
  'middleware': false,
  'ghostMode': {
    'clicks': true,
    'scroll': true,
    'forms': {
      'submit': true,
      'inputs': true,
      'toggles': true
    }
  },
  'logLevel': 'info',
  'logPrefix': 'BS',
  'logConnections': false,
  'logFileChanges': true,
  'logSnippet': true,
  'rewriteRules': false,
  'open': 'local',
  'browser': 'default',
  'xip': false,
  'hostnameSuffix': false,
  'reloadOnRestart': false,
  'notify': true,
  'scrollProportionally': true,
  'scrollThrottle': 0,
  'scrollRestoreTechnique': 'window.name',
  'scrollElements': [],
  'scrollElementMapping': [],
  'reloadDelay': 0,
  'reloadDebounce': 0,
  'reloadThrottle': 0,
  'plugins': [],
  'injectChanges': true,
  'minify': true,
  'host': null,
  'localOnly': false,
  'codeSync': true,
  'timestamps': true,
  'clientEvents': [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click'
  ],
  'socket': {
    'socketIoOptions': {
      'log': false
    },
    'socketIoClientConfig': {
      'reconnectionAttempts': 50
    },
    'path': '/browser-sync/socket.io',
    'clientPath': '/browser-sync',
    'namespace': '/browser-sync',
    'clients': {
      'heartbeatTimeout': 5000
    }
  },
  'tagNames': {
    'less': 'link',
    'scss': 'link',
    'css': 'link',
    'jpg': 'img',
    'jpeg': 'img',
    'png': 'img',
    'svg': 'img',
    'gif': 'img',
    'js': 'script'
  }
};
