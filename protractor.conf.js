exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['test/e2e/cookbookSpec.js'],
    baseUrl: 'http://localhost:8000',
	jasmineNodeOpts: {
	showColors: true,
	defaultTimeoutInterval: 30000
	}
};