var expect = require('chai').expect;
const commonMethods = require('../Utilities/commonMethods.js');
const variables = require('../Utilities/globalVariables');




var Create_Reg_Piming = "//a[text()='Create']";
var CreateReg_SaveButton ="//span[@class='ml my-ml-save']";

var createRegistration = (callback) => {
    describe('Verifying Admin Registration functionality ', () => {
        it('should be able to create registration successfully', () => {
            browser.pause(1000);
            browser.click(Create_Reg_Piming);

            browser.pause(2000);
            commonMethods.input_Value_Placeholder_Func("First Name", FirstName);
            commonMethods.input_Value_Placeholder_Func("Last Name", LastName);

            commonMethods.drop_Down_Func("Your Country", YourCountry);

            commonMethods.input_Value_Placeholder_Func("Contact number", ContactNumber);
            commonMethods.input_Value_Placeholder_Func("Email Id", Email_id);
            commonMethods.drop_Down_Func("Registration Type", RegistrationType);

            commonMethods.drop_Down_Func("Select Cluster", Select_Cluster);
            commonMethods.drop_Down_Func("Select Chapter", Select_Chapter);
            commonMethods.drop_Down_Func("Select Sub Chapter", Select_SubChapter);
            commonMethods.input_Value_Placeholder_Func("Password", Password);
            
            commonMethods.drop_Down_Func("Account Type", AccountType);
            commonMethods.input_Value_Placeholder_Func("Company Name", ComapanyName);
            commonMethods.input_Value_Placeholder_Func("Company URL", ComapanyURL);
            commonMethods.input_Value_Placeholder_Func("Remarks",Remarks);
            commonMethods.drop_Down_Func("How did you know about us", HowDidYouKnowAboutUs);
            browser.click(CreateReg_SaveButton);
            var message = commonMethods.toastAlert();
            if(message === "User created successfully"){
                callback(null,message)
            }
            else{
                callback(message,null)
            }
            browser.pause(5000);

        });
    });
}

//createRegistration();

module.exports = {
    createRegistration
}