var expect = require('chai').expect;
var Filtering = require('../test/filterOverlay')
const commonMethods = require('../Utilities/commonMethods')


var UserCategory = "//div[text()= 'Select User Category']";
var BasicInfoSave = "span.ml.my-ml-save";

var softRegistration = (callback) => {
    describe('Should Complete SoftRegistration by Admin :', () => {

        Filtering.WhichFIlterDoYouWant("Email")

        it('should complete the softRegistration', () => {
            browser.pause(2000);
            browser.moveToObject(UserCategory);
            browser.pause(1000);

            browser.click("//*[@id='" + Identity + "']");
            console.log(browser.isSelected("//*[@id='" + Identity + "']"));

            //commonMethods.drop_Down_Func("Select User Category", Select_UserCategory);
            commonMethods.getRandomValue("Select User Category");
            commonMethods.drop_Down_Func("Select Type Of Industry", Select_Idustry);
            commonMethods.drop_Down_Func("Select Profession", Select_Profession);

            browser.pause(1000);
            browser.click(BasicInfoSave);
            var message = commonMethods.toastAlert();
            if(message === "Saved successfully"){
                callback(null, message);
            }
            else{
                callback(message, null);
            }
            browser.pause(5000);
            

        });

    });

}

module.exports = {
    softRegistration
}
