// Karma configuration file

const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'), // Consider removing if not needed for CI
      require('karma-junit-reporter'), // Make sure it's included here
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: path.join(__dirname, './coverage/angular-project'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'lcovonly' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml', 'junit'], // Ensure 'junit' is listed here
    junitReporter: {
      outputDir: path.join(__dirname, './test-results'), // Update the path if necessary
      outputFile: 'test-results.xml', // This is where test results will be saved
      useBrowserName: false // This prevents the browser name from being appended to the results file
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadlessCI'],
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu', '--disable-translate', '--disable-extensions', '--remote-debugging-port=9222']
      }
    },
    singleRun: true,
    restartOnFileChange: false
  });
};
