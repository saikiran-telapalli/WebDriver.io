var mocha = require('mocha')

var settingsTab = ".//span[@class='ml my-ml-settings_new']"

//Registration process setup priming
var documentProcess_Priming = ".//a[text()='Document Process']"
var KYCCategory_Priming = ".//a[text()='KYC Category']"
var documentFormat_Priming = ".//a[text()='Document Formats']"
var specification_Priming = ".//a[text()='Specifications']"
var industry_Priming = ".//a[text()='Industries']"
var profession_Priming = ".//a[text()='Professions']"
var userCategory_Priming = ".//a[text()='User Categories']"
var subDomian_Priming = ".//a[text()='Sub Domains']"
var documehtMapping_Priming = ".//a[text()='Document Mapping']"
var processMapping_Priming = ".//a[text()='Document Mapping']"

//Registration - Additional info settings
var registration_Priming = ".//a[text()='Registrations']"
var entityTypes_Priming = ".//a[text()='Entity Types']"
var companyStatges_Priming = ".//a[text()='Company Stages']"
var typeOfBusiness_Priming = ".//a[text()='Types Of Business']"
var lookingFor_Priming = ".//a[text()='Looking For']"
var citizenship_Priming = ".//a[text()='Citizenship']"


var SettingsTab = () => {

    console.log("Into Settings tab")

    describe("Settings tab", () => {
        it('Click on settings tab', () => {
            commonPathInSettings()
        })
    })

    }
    var KYC = () =>{
        describe('kyc', () =>{
            it('clicking on kyccategory', () => {
                browser.moveToObject(documentFormat_Priming)
                browser.pause(500)
                browser.click(KYCCategory_Priming)
            })

        })
    }

    var DocumentFormat = () => {
        describe('DocumentFormat', () =>{
            it('clicking on documentFormat_Priming', () => {
                browser.moveToObject(documentFormat_Priming)
                browser.pause(500)
                browser.click(documentFormat_Priming)
            })
        })

    }
    var specificationFormat = () => {
        describe('specification', () =>{
            it('clicking on specification_Priming', () => {
                browser.moveToObject(specification_Priming)
                browser.pause(500)
                browser.click(specification_Priming)
            })
        })
    }
    var industry = () => {
        describe('industry', () =>{
            it('clicking on industry_Priming', () => {
                browser.moveToObject(industry_Priming)
                browser.pause(500)
                browser.click(industry_Priming)
            })
        })
    }
    var profession = () => {
        describe('profession', () =>{
            it('clicking on profession_Priming', () => {
                browser.moveToObject(profession_Priming)
                browser.pause(500)
                browser.click(profession_Priming)
            })
        })
    }
    var usercategory = () => {
        describe('usercategory', () =>{
            it('clicking on userCategory_Priming', () => {
                browser.moveToObject(userCategory_Priming)
                browser.pause(500)
                browser.click(userCategory_Priming)
            })
        }) 
    }
    var subdomain = () => {
        describe('subdomain', () =>{
            it('clicking on subDomian_Priming', () => {
                browser.moveToObject(subDomian_Priming)
                browser.pause(500)
                browser.click(subDomian_Priming)
            })
        })
    }
    var Documentmapping = () => {
        describe('Documentmapping', () =>{
            it('clicking on documehtMapping_Priming', () => {
                browser.moveToObject(documehtMapping_Priming)
                browser.pause(500)
                browser.click(documehtMapping_Priming)
            })
        })
    }

    var Processmapping = () => {
        describe('Processmapping', () =>{
            it('clicking on processMapping_Priming', () => {
                browser.moveToObject(processMapping_Priming)
                browser.pause(500)
                browser.click(processMapping_Priming)
            })
        })
    }

    var registrationPriming = () => {
        describe('registrationPriming', () =>{
            it('clicking on registration_Priming', () => {
                browser.moveToObject(registration_Priming)
                browser.pause(500)
                browser.click(registration_Priming)
            })
        })
    }

    var entityType = () => {
        describe('entityType', () =>{
            it('clicking on entityTypes_Priming', () => {
                browser.moveToObject(entityTypes_Priming)
                browser.pause(500)
                browser.click(entityTypes_Priming)
            })
        })
    }

    var companyStages = () => {
        describe('companyStages', () =>{
            it('clicking on companyStatges_Priming', () => {
                browser.moveToObject(companyStatges_Priming)
                browser.pause(500)
                browser.click(companyStatges_Priming)
            })
        })
    }

    var TypeOfBusiness = () => {
        describe('TypeOfBusiness', () =>{
            it('clicking on typeOfBusiness_Priming', () => {
                browser.moveToObject(typeOfBusiness_Priming)
                browser.pause(500)
                browser.click(typeOfBusiness_Priming)
            })
        })
    }
    
    var lookingFor = () => {
        describe('lookingFor', () =>{
            it('clicking on lookingFor_Priming', () => {
                browser.moveToObject(lookingFor_Priming)
                browser.pause(500)
                browser.click(lookingFor_Priming)
            })
        })
    }

    var citizenShip = () => {
        describe('TypeOfBusiness', () =>{
            it('clicking on citizenship_Priming', () => {
                browser.moveToObject(citizenship_Priming)
                browser.pause(500)
                browser.click(citizenship_Priming)
            })
        })
    }

var settingsTabDocumentProcess = () => {
    describe('Click on settings and document process tab', () => {
        it('Click on settings and document process tab', () => {

            console.log("Into Settings tab, DocumentProcess")
            commonPathInSettings()
            browser.pause(2000)
            browser.moveToObject(documentProcess_Priming)
            browser.pause(1000)
            browser.click(documentProcess_Priming)
        })
    })
}


var commonPathInSettings = () => {

    browser.moveToObject(settingsTab)
    browser.pause(6000)
    browser.click(settingsTab)
    browser.pause(4000)
}


module.exports = {
    SettingsTab,
    settingsTabDocumentProcess,
    KYC,
    DocumentFormat,
    specificationFormat,
    industry,
    profession,
    usercategory,
    subdomain,
    Documentmapping,
    Processmapping,
    registrationPriming,
    entityType,
    companyStages,
    TypeOfBusiness,
    lookingFor,
    citizenShip

}