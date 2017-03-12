exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['todo-spec.js'],
    capabilities: {
        browserName: 'firefox'
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine'
};