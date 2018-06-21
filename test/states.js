var mocha = require('mocha')
var should = require('should')


var allstates = () => {
    describe("Activating states", function () {
        it('Activating all the state records', function () {

            //Clicking on states priming
            var statesPriming = browser.getLocation(".//a[text()='States']")
            browser.moveToObject(".//a[text()='States']", statesPriming.x, statesPriming.y)
            browser.click(".//a[text()='States']")
            browser.pause(1000)

            //Clicking on >> to get the page index value
            browser.click(".//a[text()='>>']")
            browser.pause(1000)

            var PaginationLastValue = $(".//li[@class='active page-item']")
            var PaginationCount = PaginationLastValue.getAttribute('title')
            console.log("Pagination count value is " + PaginationCount)

            //Again clicking on intial pagination <<
            browser.click(".//a[text()='<<']")
            browser.pause(1000)

            count = 1;
            try {
                for (j = 1; j <= PaginationCount; j++) {


                    for (i = 1; i <= 10; i++) {

                        var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[5]/div/label")
                        var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

                        if (statusOfSlider === "switch") {

                            //Clicking on slider
                            browser.click("(.//*[@class='slider'])[" + i + "]")
                            browser.pause(1000)

                            //Getting the state name
                            var statesRecord = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[" + i + "]/td[3]")
                            var attr = statesRecord.getAttribute("title")

                            //Getting the tab index
                            //var tabIndexCountValue = statesRecord.getAttribute("tabindex")

                            //Printing the state name and tab index
                            console.log("State title  is = " + (count++) + " " + attr)
                            browser.pause(1000)
                        }

                    }

                    //Moving to next pagination
                    browser.click(".//a[text()='>']")
                    browser.pause(4000)
                }
            }
            catch (err) {

                console.log("Activated all the states records with error= " + err)
            }

        })
    })

}

var activatingSpecificState = () => {
    describe('activating specific state', () => {
        it.only('Activating state through search filter', function () {

            //Clicking on states priming
            var statesPriming = browser.getLocation(".//a[text()='States']")
            browser.moveToObject(".//a[text()='States']", statesPriming.x, statesPriming.y)
            browser.click(".//a[text()='States']")
            browser.pause(1000)

            //enterning the state name on search field
            browser.setValue(".//input[@placeholder='Search']", stateName)
            browser.pause(2000)

            var sliderStatus = $(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[1]/td[5]/div/label")
            var statusOfSlider = sliderStatus.getAttribute("class")//if status of slider is "switch on" then all the records will be inactivated

            if (statusOfSlider === "switch") {

                browser.click(".//*[@class='slider']")

            }

            else {
                console.log("state " + stateName + " aleady activated")
            }

        })
    })
}

module.exports ={
    allstates,
    activatingSpecificState
}