const commonMethods = require('../Utilities/commonMethods.js');
require('./hardRegistration');

var Docs_Approval = "span.ml.flaticon-ml-file-1";
var UserActivation = ".//span[@class='ml flaticon-ml-active-user']";


var userApproval = (callback) => {
    describe('Admin should be able to Approve User')
    it('Should be able to Approve Kyc Documents', () => {
        browser.click(KYCDocStep);
        browser.pause(2000);
        if (upload_Button_Count != 0) {
            for (var i = 1; i <= upload_Button_Count; i++) {
                var KYC_CheckBox = "(.//*[@name='checkbox'])[" + i + "]";
                browser.click(KYC_CheckBox);
            }

            browser.pause(3000);
            browser.click(Docs_Approval);
            var message = commonMethods.toastAlert();
            console.log("message is: " + message);
            browser.pause(5000);
            browser.click(UserActivation);
            var message = commonMethods.toastAlert();
            if (message === "User Approved successfully") {
                callback(null, message);
            }
            else {
                callback(message, null);
            }
            browser.pause(5000);
        }

        else {
            console.log("No Kyc documents to approve the user");
        }
    });
}

module.exports = {
    userApproval
}