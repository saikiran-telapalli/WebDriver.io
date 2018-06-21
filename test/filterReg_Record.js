const commonMethods = require('../Utilities/commonMethods')

var FilterButton = ".//div[@class='filter_btn']";
var Filterwith_Email = ".//input[@class='form-control float-label' and @placeholder='Email']";
var SaveFilterOverLay = ".//div[@class='filter_table']/div/div/a[1]";
var SelectRecord = ".//*[@id='react-root']/div/div/div[1]/div[3]/div/div[2]/div/div[2]/div[1]/div[2]/table/tbody/tr/td[1]/input";
var EditRecord = ".//span[@class='ml ml-edit']";

var filter_RegRecord = (callback) => {
    describe('Should be able to filter successfully', () => {
        it('should filter the the registration record', () => {

            browser.click(FilterButton);
            browser.setValue(Filterwith_Email, FilterEmailid);
            browser.click(SaveFilterOverLay);
            browser.pause(1000);
            browser.click(SelectRecord);
            browser.click(EditRecord);
            callback(null, "done");

        });
    })
}

module.exports = {
    filter_RegRecord
}