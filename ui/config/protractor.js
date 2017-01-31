const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const timeout = 36000;

exports.config = {
  allScriptsTimeout: timeout,
  specs: [
    '../e2e/**/*.e2e-spec.ts',
  ],
  capabilities: {
    browserName: 'chrome',
  },
  directConnect: true,
  chromeOnly: true,
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: timeout,
    print: function() {},
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      project: './e2e',
    });
  },
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },
};
