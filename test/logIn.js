var expect = require('chai').expect;
const variables = require('../Utilities/globalVariables');
const Wait = require('../Utilities/commonMethods');

moolyaUserName = "//input[@name='userName']"
moolyaPassword = "//input[@name='Password']"
SignInButton = '.ml_submit_btn'


var login = (Username,Password,callback) => {
    describe('Verifying moolya Login Page', () => {
        it('should be able to Login successfully', () => {
            browser.url('/');
            browser.windowHandleFullscreen();
            browser.timeoutsImplicitWait(5000);
            //browser.saveScreenshot('./screenshots/loginpage.png '+Date());
            browser.pause(1000);
            browser.setValue(moolyaUserName, Username);
            browser.setValue(moolyaPassword, Password);
            browser.click(SignInButton);
            //Wait.waitForElementToVisible(".logo");
            callback(null, "done")
        })
    });
}

//login();

module.exports = {
    login
}