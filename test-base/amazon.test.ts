import { test as baseTest } from '@playwright/test';
import { AmazonPage } from '../src/pages/amazon.page';
import { TestBase } from './test-base';

const test = baseTest.extend<TestBase>({
    page: async ({ page }, use) => {
        const testBase = new TestBase();
        testBase.initializeForTest(page);
        await use(testBase);
        await testBase.teardownAfterTest();
    },
});

test('Amazon Search and Cart Functionality', async ({ page }) => {
    const amazonPage = new AmazonPage(page);

    // Step 1: Navigate to Amazon and verify homepage
    amazonPage.navigateToAmazon();

    // Step 2: Search for 'Wireless Mouse'
    amazonPage.searchProduct('Wireless Mouse');

    // Step 3: Select the first non-sponsored product
    amazonPage.selectFirstNonSponsoredProduct();

    // Step 4: Add the product to the cart
    amazonPage.addToCart();

    // Step 5: Verify the product is in the cart
    amazonPage.verifyCart('Wireless Mouse');
});
