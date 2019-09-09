const {
    Eyes,
    Target,
    ClassicRunner,
    Configuration,
    BatchInfo
} = require('@applitools/eyes-webdriverio');

// Initialize the eyes SDK and set your private API key.
const eyes = new Eyes(new ClassicRunner());

describe('Match Level', () => {

    it('Match Level Example', async () => {

        try {
            const configuration = new Configuration();
            configuration.setAppName('MatchLevel Example');
            configuration.setTestName('Match Test');
            
            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);
          
            await eyes.open(browser)

            // Navigate the browser to the "hello world!" web-site.
            eyes.setMatchLevel('Content')
            await driver.url('https://applitools.com/helloworld');

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window().fully());

            // End the test.
            // const results = await eyes.close(); // will return only first TestResults, but as we have two browsers, we need more result
            await eyes.close(false);
            const results = await eyes.getRunner().getAllTestResults(false);
            console.log(results);
            
        } catch (e) {
            console.log(`Error ${e}`);
        } finally {
            await eyes.abort();
        }
    })
})