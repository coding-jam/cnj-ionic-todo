exports.config = {
    seleniumAddress: 'http://0.0.0.0:4723/wd/hub',
    seleniumArgs: ["-browserTimeout=60"],

    specs: ['../tests/e2e/**/*.js'],

    capabilities: {
        platformName: 'iOS',
        platformVersion: '9.2',
        deviceName: 'iPhone 5s',
        browserName: "",
        autoWebview: true,
        app: __dirname + '/../platforms/ios/build/emulator/cnj-todo-list.app'
    },

    onPrepare: function() {
        var wd = require('wd');
        var protractor = require('protractor');
        var wdBridge = require('wd-bridge')(protractor, wd);

        wdBridge.initFromProtractor(exports.config);
    }
};
