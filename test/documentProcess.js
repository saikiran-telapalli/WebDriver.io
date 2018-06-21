var mocha = require('mocha')
var chai = require('chai')
const drop_DownSelection = require('../Utilities/commonMethods.js');
const input_UsingPlaceholder = require('../Utilities/commonMethods.js');
var assert = chai.assert
const expect = chai.expect
//const ExcelData = require('./Exceldata')
//const Read = ExcelData.readFileData()
var faker = require('faker')
var async = require('async')

var addActionButton = "span.ml.ml-plus"
var saveActionButton = "span.ml.my-ml-save"
var cancelActionButton = "span.ml.my-ml-cancel"
var statusToggleButton = "(.//div[@class='slider'])[1]"
var alertMessage = ".//*[@id='toast-container/div/div"
var kycCategoryPriming = "a=KYC Category"
var documentFormatPriming = "a=Document Formats"
var specificationPriming = "a=Specifications"
var industryPriming = "a=Industries"
var professionPriming = "a=Professions"
var userCategoryPriming = ".//a[text()='User Categories']"
var subDomainPriming = ".//*[text()='Sub Domains']"
var documentMappingPriming = ".//*[text()='Document Mapping']"
var processMappingPriming = ".//*[text()='Process Mapping']"
var addButtonInProcessMapping = ".//div[@class='pull-right block_action']/img"

var kycCategory = () => {
    describe('Creating KYC category', () => {
        it.only('Navigating to KYC Category Priming', () => {

            //browser.click(kycCategoryPriming)
            browser.pause(2000)

            //for (i = 2; i <= 3; i++) {
            browser.click(addActionButton)
            browser.pause(3000)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", KYCcategoryName)
            console.log("KYCcategoryName name is " +KYCcategoryName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", KYCcategoryDisplayName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", KYCcategoryAboutHere)
            browser.click(statusToggleButton);
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            var actualAlertMessage = browser.getText(alertMessage)
            console.log("Alert message = " + actualAlertMessage)
            var expectedAlertMessage = "\'KYC category\' added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "KYC Category record not created")
            browser.pause(3000)

            //}
        })

    })

}

var documentformat = () => {

    describe('Creating document format', () => {
        it('Navigating to Document Formats priming', () => {
            browser.pause(5000)
            browser.click(documentFormatPriming)
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", documentFormat);
            console.log("documentFormat name is " +documentFormat)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", documentDisplayFormat);
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "About here");
            browser.click(statusToggleButton);
            browser.click(saveActionButton)
            //browser.click(cancelActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Document format added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Document Format record not created")
            browser.pause(3000)
        })

    })

}

var Specification = () => {
    describe('Creating specification', () => {
        it('Navigating to Specifications priming', function () {
            browser.pause(3000)
            browser.click(specificationPriming)
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Specification Name", specifications);
            console.log("specification name is " +specifications)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", specificationsDisplayName);
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "About Here");
            browser.click(statusToggleButton);
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Specification added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Specification record not created")
            browser.pause(3000)
        })
    })
}


var industry = () => {
    describe('Creating Industry', () => {
        it('Navigating to Industries tab Priming', () => {
            browser.click(industryPriming)
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Industry Name", industryName);
            console.log("industryName is" +industryName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", industryDisplayName);
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "About here");
            browser.click(statusToggleButton);
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Industry added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Industry record not created")
            browser.pause(3000)
        })

    })
}

var professiondata = () => {
    describe('Creating Profession', () => {
        it('Navigating to Professions tab', function () {
            browser.click(professionPriming)
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Profession Name", professionName);
            console.log("professionName is" +professionName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", professionDisplayName);
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "About here");
            drop_DownSelection.drop_Down_Func("Select Industry", industryName)
            browser.click(statusToggleButton);
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Profession added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Profession record not created")
            browser.pause(3000)
        })
    })
}



var userCategory = () => {
    describe('Creating UserCategory', () => {
        it('Adding User category', function () {

            browser.click(userCategoryPriming)
            browser.pause(1000)
            browser.click(addActionButton)
            browser.pause(2000)
            drop_DownSelection.drop_Down_Func("Select Community", communityName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("User Category Name", userCategoryName)
            console.log("userCategoryName is " +userCategoryName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", userCategoryDisplayName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            browser.click(statusToggleButton)
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "User type added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "User type record not created")
            browser.pause(3000)

        })

    })
}

var subdomain = () => {
    describe('Creating sub-domain', () => {
        it('Adding sub domain', function () {

            browser.moveToObject(subDomainPriming)
            browser.click(subDomainPriming)
            browser.pause(1000)
            browser.click(addActionButton)
            browser.pause(2000)
            drop_DownSelection.drop_Down_Func("Select Type Of Industry", industryName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", SubDomainName)
            console.log("SubDomainName is " +SubDomainName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", SubDomainDisplayName)
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            browser.click(statusToggleButton)
            //browser.click(cancelActionButton)
            browser.click(saveActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Sub-Domain added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Sub-Domain record not created")
            browser.pause(3000)

        })
    })
}

var doumentMapping = () => {
    describe('Adding document mapping', () => {
        it('Adding document for self', function () {
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            var DocumentOne = DocumentMappingSelfName + "self"
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", DocumentOne)
            console.log("document name self = " +DocumentOne)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", DocumentMappingSelfDisplayName + " self")
            drop_DownSelection.multi_Select_Func("Allowable Format", "PNG")
            //Selecting cluster
            browser.click("(.//div[text()='Cluster'])[2]")
            browser.pause(1000)
            browser.keys(clusterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting Chapter
            browser.click("(.//div[text()='Chapter'])[2]")
            browser.pause(1000)
            browser.keys(chapterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting SubChapter
            drop_DownSelection.multi_Select_Func("SubChapter", subchapterName)
            //Activating the document mapping type
            browser.click(statusToggleButton)
            //Selecting KYC Categories
            drop_DownSelection.multi_Select_Func("KYC Categories", KYCcategoryName)
            //Selecting Type of Document
            drop_DownSelection.multi_Select_Func("Type of Document", "self")
            //Entering allowable size
            input_UsingPlaceholder.input_Value_Placeholder_Func("Allowable Size", 500)
            //Selecting Unit
            drop_DownSelection.drop_Down_Func("Select Unit", "KB")
            //Clicking on save action button
            //browser.click(saveActionButton)
            browser.click(cancelActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Document mapping added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Document mapping record not created")
            browser.pause(3000)

        })

        it('Adding document for process', function () {
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            var DocumentTwo = DocumentMappingNameProcess + " Process"
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", DocumentTwo)
            console.log("document name process = " +DocumentTwo)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", DocumentMappingProcessDisplayName + " Process")
            drop_DownSelection.multi_Select_Func("Allowable Format", "PNG")
            //Selecting cluster
            browser.click("(.//div[text()='Cluster'])[2]")
            browser.pause(1000)
            browser.keys(clusterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting Chapter
            browser.click("(.//div[text()='Chapter'])[2]")
            browser.pause(1000)
            browser.keys(chapterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting SubChapter
            drop_DownSelection.multi_Select_Func("SubChapter", subchapterName)
            //Activating the document mapping type
            browser.click(statusToggleButton)
            //Selecting KYC Categories
            drop_DownSelection.multi_Select_Func("KYC Categories", KYCcategoryName)
            //Selecting Type of Document
            drop_DownSelection.multi_Select_Func("Type of Document", "process")
            //Entering allowable size
            input_UsingPlaceholder.input_Value_Placeholder_Func("Allowable Size", 500)
            //Selecting Unit
            drop_DownSelection.drop_Down_Func("Select Unit", "KB")
            //Clicking on save action button
            //browser.click(saveActionButton)
            browser.click(cancelActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Document mapping added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Document mapping record not created")
            browser.pause(3000)

        })
        it('Adding document for chapter', function () {
            browser.pause(2000)
            browser.click(addActionButton)
            browser.pause(3000)
            var DocumentThree = DocumentMappingNameProcess + " Chapter"
            input_UsingPlaceholder.input_Value_Placeholder_Func("Name", DocumentThree)
            console.log("Document name process = " +DocumentThree)
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", DocumentMappingChapterDisplayName + " chapter")
            drop_DownSelection.multi_Select_Func("Allowable Format", "PNG")
            //Selecting cluster
            browser.click("(.//div[text()='Cluster'])[2]")
            browser.pause(1000)
            browser.keys(clusterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting Chapter
            browser.click("(.//div[text()='Chapter'])[2]")
            browser.pause(1000)
            browser.keys(chapterName)
            browser.pause(500)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting SubChapter
            drop_DownSelection.multi_Select_Func("SubChapter", subchapterName)
            //Activating the document mapping type
            browser.click(statusToggleButton)
            //Selecting KYC Categories
            drop_DownSelection.multi_Select_Func("KYC Categories", KYCcategoryName)
            //Selecting Type of Document
            drop_DownSelection.multi_Select_Func("Type of Document", "chapter")
            //Entering allowable size
            input_UsingPlaceholder.input_Value_Placeholder_Func("Allowable Size", 500)
            //Selecting Unit
            drop_DownSelection.drop_Down_Func("Select Unit", "KB")
            //Clicking on save action button
            //browser.click(saveActionButton)
            browser.click(cancelActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Document mapping added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Document mapping record not created")
            browser.pause(3000)

        })
    })
}

var processMapping = () => {
    describe('creating process mapping', () => {
        it('Adding process mapping', function () {
            browser.moveToObject(processMappingPriming)
            browser.pause(3000)
            browser.click(processMappingPriming)
            browser.pause(3000)
            browser.click(addActionButton)
            browser.pause(2000)
            drop_DownSelection.drop_Down_Func("Process", "Registration")
            //Selecting community type
            drop_DownSelection.multi_Select_Func("Communities", communityName)
            //Selecting user category
            drop_DownSelection.multi_Select_Func("User Categories", userCategoryName)
            if (communityName == "Companies" || communityName == "Startups" || communityName == "Institutions") {
                //Selecting identity as company
                drop_DownSelection.drop_Down_Func("Identity", identity)
            }
            else {
                //Selecting identity as identity
                drop_DownSelection.drop_Down_Func("Identity", identity)
            }
            //Selecting industries
            drop_DownSelection.multi_Select_Func("Industries", industryName)
            //Selecting profession
            drop_DownSelection.multi_Select_Func("Profession", professionName)
            //Selecting cluster
            browser.click("(.//div[text()='Cluster'])[2]")
            browser.pause(1000)
            browser.keys(clusterName)
            browser.pause(1000)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting state
            drop_DownSelection.multi_Select_Func("State", stateName)
            //Selecting Chapter
            browser.click("(.//div[text()='Chapter'])[2]")
            browser.pause(1000)
            browser.keys(chapterName)
            browser.pause(1000)
            browser.keys("Enter")
            browser.pause(1000)
            browser.keys("Escape")
            //Selecting SubChapter
            drop_DownSelection.multi_Select_Func("SubChapter", subchapterName)
            //Activating the document mapping type
            browser.click(statusToggleButton)

            let documenttypeName
            for (i = 1; i <= 3; i++) {
                browser.moveToObject(addButtonInProcessMapping)
                switch (i) {
                    case 1: documenttypeName = "self"
                        break;
                    case 2: documenttypeName = "process"
                        browser.click(addButtonInProcessMapping)
                        break;
                    case 3: documenttypeName = "chapter"
                        browser.click(addButtonInProcessMapping)
                        break;
                }
                browser.moveToObject("(.//div[@class='slider'])[" + (i + 1) + "]")
                //Selecting Type of Document
                drop_DownSelection.drop_Down_Func("Document Type", documenttypeName)

                //Selecting KYC Categories
                browser.click("(.//div[text()='KYC Category'])[" + i + "]")
                browser.pause(1000)
                browser.setValue("(//div[text()= 'KYC Category']/following-sibling::div/input)["+i+"]", KYCcategoryName)
                browser.pause(1000)
                browser.keys("Enter")
                //Activating the slider
                browser.click("(.//div[@class='slider'])[" + (i + 1) + "]")
                browser.pause(1000)

            }

            //var CommunityText = browser.getText(".//span[text()='Communities/following-sibling::div//span[@class='Select-value-label")
            //console.log(" " + CommunityText)
            //expect(CommunityText).to.equal(communityName)
            //console.log("Done")

            //Clicking on save action button
            browser.click(saveActionButton)
            //browser.click(cancelActionButton)
            browser.pause(1000)
            console.log(browser.getText(alertMessage))
            var expectedAlertMessage = "Process mapping added successfully"
            assert.equal(actualAlertMessage, expectedAlertMessage, "Process mapping record not created")
            browser.pause(3000)

            //browser.debug()

        })

    })
}

var allRegistrationPrimings = () => {

    kycCategory()
    documentformat()
    Specification()
    industry()
    professiondata()
    userCategory()
    subdomain()
    doumentMapping()
    processMapping()


}

module.exports = {
    kycCategory,
    documentformat,
    Specification,
    industry,
    professiondata,
    userCategory,
    subdomain,
    doumentMapping,
    processMapping,
    allRegistrationPrimings
}