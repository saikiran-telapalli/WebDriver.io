const variables = require('../Utilities/globalVariables');
const moolyaLogin = require('./logIn');
var expect = require('chai').expect;

var EmailUserName = ".//*[@id='username']";
var EmailPassword = ".//*[@id='password']";
var EmailLogInButton = "//input[@class='ZLoginButton DwtButton']"
var TotalEmails = ".//*[@class='DwtListView-Rows']/li"
var EmailSubject = ".//*[@id='zv__TV__TV-main_MSG_hdrTableTopRow']/td[2]";


var emailVerification = (callback) => {
    describe('Verifying moolya email verification process :', () => {
        it('Should be able to verify email successfully', () => {
            browser.url("https://mail.raksan.in/");
            //browser.windowHandleFullscreen();
            //browser.timeoutsImplicitWait(5000);
            browser.pause(3000);
            browser.setValue(EmailUserName, Email_UserName);
            browser.setValue(EmailPassword, Email_Password);
            browser.click(EmailLogInButton);
            browser.pause(3000);

            var totalemails = browser.getElementSize(TotalEmails);
            var totalemailscount = Object.keys(totalemails).length
            //console.log('Totalemailscount: ' + Object.keys(totalemails).length);

            //console.log("totalemails= " + totalemails);
            for (var i = 1; i <= totalemailscount; i++) {

                browser.pause(2000);
                browser.click(".//*[@class='DwtListView-Rows']/li[" + i + "]/div");

                var Subject = browser.getText(EmailSubject);
                var ToEmail = browser.getText("//*[@id='zcs" + (2 * i) + "']/span");


                if (Subject === ExpectedSubject) {
                    console.log("subject matched");

                    if (ToEmail === ExpectedTomail) {
                        console.log("email matched");

                        browser.frame("zv__TV-main__MSG__body__iframe");
                        //console.log("switched to frame suucessfully");
                        browser.pause(1000);
                        browser.moveToObject(".//a[text()='Verify e-mail id']");
                        browser.pause(1000);
                        browser.click(".//a[text()='Verify e-mail id']");
                        break;
                    }
                    else {
                        console.log("email not matched");
                    }
                }

            }

            browser.pause(5000);
            browser.switchTab();
            browser.url("https://qaapp.moolya.global");
            browser.pause(3000);
            browser.setValue(moolyaUserName, AdminUsername);
            browser.setValue(moolyaPassword, AdminPassword);
            browser.click(SignInButton);
            browser.pause(4000);
            callback(null,"done")
        })
    })

}

module.exports = {
    emailVerification
}
