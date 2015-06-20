var HtmlReporter = require('protractor-html-screenshot-reporter'),
    settings = require(__dirname + '/settings.json');

module.exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4446/wd/hub',
    seleniumPort: 4446,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {
        require('jasmine-reporters');
        // setup the jasmine reporters
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: settings.dir.temp + '/test-reports/e2e'
        }));
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(settings.dir.temp + '/test-reports/e2e',true,true,'junit',true));
    }
};
