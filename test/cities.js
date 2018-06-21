var mocha = require('mocha')
var should = require('should')
var chai = require('chai')
var assert = chai.assert


var CitiesPriming = ".//a[text()='Cities']"
var paginationIndexForward = ".//a[text()='>>']"
var paginationIndexBackward = ".//a[text()='<<']"
var statusToggleButton = ".slider"

var citiesAll = () => {
    describe("Activating cities", function () {
        it('Activating all the city records', function () {

            //Clicking on cities priming
            browser.moveToObject(CitiesPriming)
            browser.click(CitiesPriming)
            browser.pause(1000)

            //Clicking on >> to get the page index value
            browser.click(paginationIndexForward)
            browser.pause(1000)

            var PaginationLastValue = $(".//li[@class='active page-item']")
            var PaginationCount = PaginationLastValue.getAttribute('title')
            console.log("Pagination count value is " + PaginationCount)

            //Again clicking on intial pagination <<
            browser.click(paginationIndexBackward)
            browser.pause(1000)

            var count = 1;

            try {

                for (j = 1; j <= PaginationCount; j++) {

                    for (i = 1; i <= 10; i++) {

                        var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[6]/div/label")
                        var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

                        if (statusOfSlider === "switch") {

                            //Clicking on slider
                            browser.click("(.//*[@class='slider'])[" + i + "]")
                            browser.pause(1000)

                            //Getting the city name
                            var CitiesRecord = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[3]")
                            var attr = CitiesRecord.getAttribute("title")

                            //Getting the tab index
                            //var tabIndexCountValue = CitiesRecord.getAttribute("tabindex")

                            //Printing the city name and tab index
                            console.log("City title  is = " + (count++) + " " + attr)
                            browser.pause(2000)
                        }
                    }

                    browser.click(".//a[text()='>']")

                    browser.pause(4000)
                }

            }
            catch (err) {
                console.log("Activated all the cities records and error" + err)
            }
        })
    })
}



    var cityspecific = () => {
        describe('activating city', () => {
            it.only('Activating city through search filter', function () {

                browser.moveToObject(CitiesPriming)
                browser.click(CitiesPriming)
                browser.pause(5000)

                //Entering city name on search field
                browser.setValue(".//input[@placeholder='Search']", chapterName)
                browser.pause(2000)

                var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[1]/td[6]/div/label")
                var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

                if (statusOfSlider === "switch") {

                    browser.click(statusToggleButton)

                }

                else {
                    console.log("Cities " + chapterName + " aleady activated")
                }

            })
        })
    }

    module.exports ={
        citiesAll,
        cityspecific
    }
