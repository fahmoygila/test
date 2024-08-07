const { $ } = require('@wdio/globals')
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    get inputUsername () {
        return $('#txt-username');
    }

    get inputPassword () {
        return $('#txt-password');
    }

    get btnSubmit () {
        return $('#btn-login');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async clickAppointment(){
        await this.makeAppointment.click()
    }
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    openBrowser() {
        return super.open('profile.php#login');
    }
}

module.exports = new LoginPage();
