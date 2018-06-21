var mocha = require('mocha')
var filter = require('../test/filterOverlay')

var documentTab = ".//*[@id='documents']/div[1]/span"

var DocumentsAction = () => {
    describe('Documents tab', () => {
        it('Activating document', () => {
            browser.pause(10000)
            browser.click(documentTab)
            browser.pause(3000)

        })
    })
}

var ActivatingDocuments = () => {
    describe('activating documents', () => {
        it('activate documents', () => {
            browser.pause(2000)
            var DocumentsSize = browser.elements(".//div[@class='slider']")
            // browser.elements(".//div[@class='slider']", function(err,res) {
            //     console.log(".//div[@class='slider']", res.value.length, 'elements');
            // });
           var DocumentsCount = DocumentsSize.value.length
           console.log("Records available are " +DocumentsCount)
            for (i = 1; i <= DocumentsCount; i++) {
                var SliderStatus = $(".//div[@class='slider']/parent::label").getAttribute("class")
                if (SliderStatus == "switch") {
                    browser.click("(.//div[@class='slider'])[" + i + "]")
                    console.log("Activated documents")
                }
                else{
                    console.log("All the documents are activated")
                }
                var test = browser.getText(".//table[@class='table table-bordered']/tbody/tr[" + i + "]/td[2]")
                console.log("Document name is " +test)
            }   
        })
    })
}

module.exports = {
    DocumentsAction,
    ActivatingDocuments,
}