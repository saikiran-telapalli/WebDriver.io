const variables = require('../Utilities/globalVariables');

var pendingRegistration = (callback) => {
describe('EndUser should be able to complete pending registration', () =>{
    it('Complete pending registration', () =>{

        browser.pause(3000);
        browser.moveToObject("#NavLbl");
        browser.click("#NavLbl");
        browser.pause(3000);
        browser.click(".ml.my-ml-pending_registrations");
        browser.pause(3000);
        browser.click(".//div[@class='list_icon']");
        browser.pause(2000);
        callback(null, "done");
    })
})
}

module.exports = {
    pendingRegistration
}