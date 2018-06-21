var mocha = require('mocha')
var should = require('should')
const input_UsingPlaceholder = require('../Utilities/commonMethods.js');


var activatingAllCountries = () => {
    describe("Activating country", function () {
        it('Activating all the country records', function () {

            //Clicking on countries priming
            var countriesPriming = browser.getLocation(".//a[text()='Countries']")
            browser.moveToObject(".//a[text()='Countries']", countriesPriming.x, countriesPriming.y)
            browser.click(".//a[text()='Countries']")
            browser.pause(1000)

            var count = 1;



            try {
                for (j = 1; j <= 25; j++) {
                    for (i = 1; i <= 10; i++) {

                        var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[6]/div/label")
                        var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

                        var CountriesRecord = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[3]")

                        var attr = CountriesRecord.getAttribute("title")
                        //console.log("Country title  is = " + (count++) + " " + attr)
                        console.log(attr)
                        if(statusOfSlider === "switch on"){
                        //if (statusOfSlider === "switch") {

                            browser.click("(.//*[@class='slider'])[" + i + "]")
                            //browser.pause(1000)


                            //browser.pause(1000)
                        }
                    }

                    browser.click(".//a[text()='>']")
                    browser.pause(4000)

                }
            }

            catch (err) {

                console.log("Activated all the country records and error" + err)

            }

        })

    })
}

var activatingSpecificCountry = () => {
    describe("Activating country", () => {
        it.only('Activating country through search filter', function () {

            //Clicking on countries priming
            var countriesPriming = browser.getLocation(".//a[text()='Countries']")
            browser.moveToObject(".//a[text()='Countries']", countriesPriming.x, countriesPriming.y)
            browser.click(".//a[text()='Countries']")
            browser.pause(1000)

            //Entering country name
            input_UsingPlaceholder.input_Value_Placeholder_Func(".//input[@placeholder='Search']", countryName)
            browser.pause(2000)

            var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[1]/td[6]/div/label")
            var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

            if (statusOfSlider === "switch") {

                browser.click(".//*[@class='slider']")

            }

            else {
                console.log("Country " + countryName + " aleady activated")
            }

        })

    })

}

module.exports = {
    activatingAllCountries,
    activatingSpecificCountry
}