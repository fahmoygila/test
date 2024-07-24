const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const loginPage = require('../pageobjects/loginPage');
// const SecurePage = require('../pageobjects/secure.page');


Given(/^I am on the login page$/, async () => {
    await loginPage.openBrowser();
});

When(/^I login with '(.+?)' and '(.+?)'$/, async (username, password) => {
    await loginPage.login(username, password)
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

