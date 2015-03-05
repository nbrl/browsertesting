// Karma configuration
// Generated on Thu Mar 05 2015 11:02:25 GMT+0000 (GMT)

module.exports = function(config) {

  if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
    console.log('Need to set SAUCE_USERNAME and SAUCE_ACCESS_KEY');
    process.exit(1);
  }

  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 7',
      version: '35'
    }
  };

  var conf = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [
      'mocha',
      'browserify'
    ],

    // list of files / patterns to load in the browser
    files: [
      'test/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/*.js': ['browserify']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //reporters: ['progress'],
    //reporters: ['spec'],
    reporters: ['spec', 'saucelabs'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'browser test test testing...',
      recordScreenshots: false,
      connectOptions: {
        port: 5757,
        logfile: 'sauce_connect.log'
      }
    },

    // FIXME
    //if (process.env.OSTYPE.match(/^darwin[0-9.]+/)) {
      //// local
      //browsers: ['PhantomJS'],
    //} else {
      //// Assume sauce labs
      //// Increase timeout in case CI connection is slow
      //captureTimeout: 120000,
      //customLaunchers: customLaunchers,
      //browsers: Object.keys(customLaunchers),
    //}
    //captureTimeout: 120000,
    //customLaunchers: customLaunchers,
    //browsers: Object.keys(customLaunchers),

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['PhantomJS', 'Chrome'],
    //browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };


  // FIXME!
  if (process.env.ORCHESTRATION_HOME) {
    conf.browsers = ['PhantomJS'];
  } else {
    conf.captureTimeout = 120000;
    conf.customLaunchers = customLaunchers;
    conf.browsers = Object.keys(customLaunchers);
  }

  config.set(conf);
};
