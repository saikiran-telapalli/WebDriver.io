
var expect = require('chai').expect;

var logOut= (callback) => {
describe('Verify LogOut functionality', () => {
    it('should logout from the application', function () {
        
        browser.pause(3000)
        browser.click("//*[@id='NavLbl']")
        browser.pause(3000)
        browser.click("span.ml.my-ml-exit_or_logoff");
        browser.pause(3000)
        callback(null, "done");
    });
});

}

module.exports ={
    logOut
}




