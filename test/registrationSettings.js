var mocha = require('mocha')
var should = require('should')
var input_UsingPlaceholder = require('../test/commonMethods')

var registrationPriming = ".//*[text()='Registrations']"
var companyStagesPriming = ".//a[text()='Company Stages']"
var typesOfBusiness = ".//a[text()='Types Of Business']"
var citizenshipPriming = ".//a[text()='Citizenship"
var lookingForPriming = ".//a[text()='Looking For']"

var addActionButton = "span.ml.ml-plus"
var statusSlider = ".//div[@class='slider']"
var saveActionButton = "span.ml.my-ml-save"

var RegistrationSettings = () => {
    describe('Adding data on registration priming settings', function () {
        it.only('Navigating to registration priming', function () {

            //Clicking on registration priming
            browser.click(registrationPriming)
            browser.pause(2000)

        })

        it('Creating entity record', function () {
            
            //Click on add button
            browser.click(addActionButton)
            browser.pause(2000)
            //Entering entity name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Entity Name", entityName +"entityName")
            //Entering display name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", entityName +"entityDisplayName")
            //Entering about here
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            //Activating the entity type
            browser.click(statusSlider)
            //Clicking on save action button
            browser.click(saveActionButton)
            browser.pause(3000)

        })

        it('Adding company stages', function () {

            //Clicking on company stages priming
            browser.click(typesOfBusiness)
            browser.pause(1000)
            //Click on add button
            browser.click(addActionButton)
            browser.pause(2000)
            //Entering company stage name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Stage Of Company Name", stageOfTheCompany +"stageOfTheCompany")
            //Entering display name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", stageOfTheCompany +"stageOfTheCompanyDisplayName")
            //Entering about here
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            //Activating the company stage type
            browser.click(statusSlider)
            //Clicking on save action button
            browser.click(saveActionButton)
            browser.pause(3000)

        })

        it('Adding types of business', function () {

            //Clicking on types of business priming
            browser.click(typesOfBusiness)
            browser.pause(1000)
            //Click on add button
            browser.click(addActionButton)
            browser.pause(2000)
            //Entering types of business name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Business Name", businessName +"BusinessName")
            //Entering display name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name",  businessName +"BusinessDisplayName")
            //Entering about here
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            //Activating the types of business type
            browser.click(statusSlider)
            //Clicking on save action button
            browser.click(saveActionButton)
            browser.pause(3000)

        })

        it.only('Adding looking for', function () {

            //Clicking on looking for priming
            browser.click(lookingForPriming)
            browser.pause(1000)
            //Click on add button
            browser.click(addActionButton)
            browser.pause(2000)
            //selecting community
            input_UsingPlaceholder.drop_Down_Func("Select Community", communityName)
            //Entering looking for name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Looking For Name",  lookingFor+"LookingForName")
            //Entering display name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name", lookingFor+"LookingForsDisplayNameHere")
            //Entering about here
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            //Activating the looking for type
            browser.click(statusSlider)
            //Clicking on save action button
            browser.click(saveActionButton)
            browser.pause(3000)

        })

        it('Adding types of citizenship', function () {

            //Clicking on Citizenship priming
            browser.click(citizenshipPriming)
            browser.pause(1000)
            //Click on add button
            browser.click(addActionButton)
            browser.pause(2000)
            //Entering Citizenship name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Citizenship Name", citizenshipName +"CitizenshipName")
            //Entering display name
            input_UsingPlaceholder.input_Value_Placeholder_Func("Display Name",  citizenshipName+"CitizenshipDisplayName")
            //Entering about here
            input_UsingPlaceholder.input_Value_Placeholder_Func("About", "AboutHere")
            //Activating the Citizenship type
            browser.click(statusSlider)
            //Clicking on save action button
            browser.click(saveActionButton)
            browser.pause(3000)

        })

    })
}
