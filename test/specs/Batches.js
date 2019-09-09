const {
    Eyes,
    Target,
    ClassicRunner,
    Configuration,
    BatchInfo
} = require('@applitools/eyes-webdriverio');

// Initialize the eyes SDK and set your private API key.
const eyes = new Eyes(new ClassicRunner());

describe('Batches', () => {

    const batchInfo = new BatchInfo();
    batchInfo.setId('Batch Group Example')
    batchInfo.setName('Table Sort')

    it('Batch ONE', async () => {

        try {
            const configuration = new Configuration();
            configuration.setBatch(batchInfo);
            configuration.setAppName('Batch');
            configuration.setTestName('Batch One');
            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);
            await eyes.open(browser)
            // Navigate the browser to the "hello world!" web-site.
            await driver.url('http://the-internet.herokuapp.com/tables');
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

    it('Batch TWO', async () => {

        try {
            const configuration = new Configuration();
            configuration.setBatch(batchInfo);
            configuration.setAppName('Batch');
            configuration.setTestName('Batch Two');
            // eyes.setApiKey('Your API Key');
            configuration.setApiKey(process.env.APPLITOOLS_API_KEY);
            eyes.setConfiguration(configuration);
            await eyes.open(browser)
            // Navigate the browser to the "hello world!" web-site.
            await driver.url('http://the-internet.herokuapp.com/tables');
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