// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js

/*global jasmine */
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    // because this file is located in 'config/proptractpr' folder
    '../e2e/**/*.e2e-spec.ts'
  ],

  capabilities: {
    // browserName: 'firefox',
    browserName: 'chrome',
    // browserName: 'phantomjs',
  },

  /**
   * Can be used to specify the phantomjs binary path.
   * This can generally be ommitted if you installed phantomjs globally.
   */
  'phantomjs.binary.path': require('phantomjs-prebuilt').path,

  /**
   * Command line args to pass to ghostdriver, phantomjs's browser driver.
   * See https://github.com/detro/ghostdriver#faq
   */
  'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG'],

  /**
   * direct connect is nom supported by phantomjs, only chrome / firefox
   */
  directConnect: true,
  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },

  useAllAngular2AppRoots: true,

  beforeLaunch: function() {
    require('ts-node').register({
      // but this should be relative according to folder there scripts was starts (project root)
      project: './e2e'
    });
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  }
};
