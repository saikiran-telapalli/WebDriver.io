var expect = require('chai').expect;
const commonMethods = require('../Utilities/commonMethods');

var PackagesTab = ".//span[@class='ml my-ml-packages']"
var TransactionTab = "span.ml.my-ml-transactions"
var Registration_Priming = "//a[text()='Registrations']"

var adminTransactions = (callback) =>{
    describe('Verifying Transactions tab in Admin :', () => {
        
        it('should be able to navigate to registration successfully', () => {
            browser.pause(3000);
            browser.moveToObject(PackagesTab);
            commonMethods.waitForElementToVisible(TransactionTab);
            browser.pause(3000);
            browser.click(TransactionTab);
            commonMethods.waitForElementToVisible(Registration_Priming);
            browser.pause(3000);
            browser.click(Registration_Priming);
            browser.pause(1000);
            callback(null,"done")
        })
    })
}

module.exports = {
    adminTransactions
}
