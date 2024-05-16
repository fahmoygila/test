const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the login page$/, async () => {
    await browser.url('https://katalon-demo-cura.herokuapp.com/profile.php#login')
});

When(/^I login with '(.+?)' and '(.+?)'$/, async (username, password) => {
    await LoginPage.login(username, password)
});

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

