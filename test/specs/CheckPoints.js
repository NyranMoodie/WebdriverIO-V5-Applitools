const {
    Eyes,
    Target,
    ClassicRunner,
    Configuration,
    BatchInfo
} = require('@applitools/eyes-webdriverio');

// Initialize the eyes SDK and set your private API key.
const eyes = new Eyes(new ClassicRunner());

describe('CheckPoint', () => {
    
    it('Full Page Screenshot', async () => {

        // command to take full page screen shot
        eyes.setForceFullPageScreenshot(true);

        try {
            const configuration = new Configuration();
            configuration.setAppName('MatchLevel Example');
            configuration.setTestName('Match Test');

            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);


            await eyes.open(browser)

            // Navigate the browser to the "hello world!" web-site.

            await driver.url('https://www.wikipedia.org/');

            // Visual checkpoint #1.
            await eyes.check('Main Page', Target.window().fully());

            await eyes.checkWindow()

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

    it('Check Window/Check', async () => {
        try {
            const configuration = new Configuration();
            configuration.setAppName('MatchLevel Example');
            configuration.setTestName('Match Test');

            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);

            await eyes.open(browser)

            // Navigate the browser to the "hello world!" web-site.

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

    it('Check Element By Selector', async () => {
        try {
            const configuration = new Configuration();
            configuration.setAppName('MatchLevel Example');
            configuration.setTestName('Match Test');

            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);

            await eyes.open(browser)

            // Navigate the browser to the "hello world!" web-site.

            await driver.url('https://www.wikipedia.org/');

            await eyes.checkElementBySelector('#www-wikipedia-org > h1 > div > div');

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

    it('Check Frame', async () => {

        try {
            const configuration = new Configuration();
            configuration.setAppName('Check Frame Example');
            configuration.setTestName('Check Frame Test');

            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);


            await eyes.open(browser)

            // Navigate the browser to the "hello world!" web-site.

            await driver.url('http://the-internet.herokuapp.com/nested_frames');

            // Visual checkpoint #1.
            await eyes.checkFrame('frame-bottom');

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