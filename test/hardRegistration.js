const commonMethods = require('../Utilities/commonMethods.js');
const fakerdata = require('../Utilities/faker');

var expect = require('chai').expect;

//Locators of Contact details step
var ContactDetailsStep = ".//*[text()='Contact Details']";
var NumberTypeSave = ".//*[@id='contactA']/div[4]/a";
var EmailTypeSave = ".//*[@id='emailA']/div[3]/a";
var DefaultAddressToggle = ".//div[@class='slider']";
var AddressTypeSave = ".//*[@id='1a']/div[12]/a/span";
//Locators of Social Links Step
var SocialLinksStep = "span.ml.ml-social-Links";
var SocialLinkSave = ".//*[@id='1a']/div[3]/a/span";
var SocialLinkPic = "span=Profile Pic";
var BrowseImage = "#avatar";
var ImagePath = "/Users/saikiran/Desktop/Peter Thiel.jpg";
var UploadButton = "a=Upload";
//Locators of KYC Approval Step
var KYCDocStep = "(.//span[@class='step_name'])[5]";


var hardRegistration = (callback) => {

    describe('Complete Hard registration steps Contact Details to Uploading Documents:', () => {
        it('Should be able to fill contact details screen', () => {

            browser.pause(1000);
            browser.click(ContactDetailsStep);

            //commonMethods.getRandomValue("Select NumberType")
            commonMethods.drop_Down_Func("Select NumberType", "Personal")
            commonMethods.input_Value_Placeholder_Func("Enter Number", EnterNumber);
            browser.click(NumberTypeSave);
            var message = commonMethods.toastAlert();
            console.log("message is: " + message);
            browser.pause(5000);

            commonMethods.getRandomValue("Select Email Type");
            commonMethods.input_Value_Placeholder_Func("Enter Email Id", EnterEmailId);
            browser.pause(1000);
            browser.click(EmailTypeSave);
            var message = commonMethods.toastAlert();
            console.log("message is: " + message);
            browser.pause(5000);

            commonMethods.drop_Down_Func("Select Address Type", SelectAddressType);
            commonMethods.input_Value_Placeholder_Func("Name", Name);
            commonMethods.input_Value_Placeholder_Func("Flat/House/Floor/Bulding No", Flat_House_Floor_BuldingNo);
            commonMethods.input_Value_Placeholder_Func("Colony/Street/Locality", Colony_Street_Locality);
            commonMethods.input_Value_Placeholder_Func("Landmark", Landmark);
            commonMethods.input_Value_Placeholder_Func("Area", Area);
            commonMethods.input_Value_Placeholder_Func("Town/City", Town_City);
            commonMethods.drop_Down_Func("Select Country", Select_Country);
            browser.pause(1000);
            commonMethods.getRandomValue("Select State");
            commonMethods.input_Value_Placeholder_Func("Phone Number", PhoneNumber);
            commonMethods.input_Value_Placeholder_Func("Pincode", Pincode);
            browser.click(DefaultAddressToggle);
            browser.click(AddressTypeSave);
            var message = commonMethods.toastAlert();
            console.log("message is: " + message);
            browser.pause(5000);

        });


        it('Should be able to fill Social Link details screen', () => {

            browser.pause(2000);
            browser.click(SocialLinksStep);
            commonMethods.drop_Down_Func("Select Social Link", "Facebook");
            commonMethods.input_Value_Placeholder_Func("Enter URL", "facebook.com");
            browser.click(SocialLinkSave);
            var message = commonMethods.toastAlert();
            console.log("message is: " + message);

            browser.pause(5000);
            browser.click(SocialLinkPic);
            browser.chooseFile(BrowseImage, ImagePath);
            browser.pause(1000);
            browser.click(UploadButton);
            console.log("Pic Uploaded successfully in SocialLinks");
            browser.pause(5000);

        });


        it('Should be able to upload Kyc Documents', () => {
            var uploadButtons = ".//*[@class='ml ml-upload']";
            browser.click(KYCDocStep);
            browser.pause(5000);
            var upload_Button = browser.getElementSize(uploadButtons);
            upload_Button_Count = Object.keys(upload_Button).length;
            console.log("upload_Button_Counts :" + upload_Button_Count);

            if (upload_Button_Count != 0) {
                for (var i = 1; i <= upload_Button_Count; i++) {

                    var StatusName = browser.getText("(.//*[@id='react-root']//center)[" + i + "]");
                    var DocumentName = browser.getText("(.//input[@name='checkbox'])[" + i + "]/following-sibling::label");
                    //var KYC_CheckBox = "(.//*[@name='checkbox'])[" + i + "]";
                    var KYC_UploadButton = "(.//*[@class='ml ml-upload'])[" + i + "]/following-sibling::input";

                    if (StatusName == "Approved") {
                        console.log(DocumentName + " is " + StatusName);
                    }
                    else if (StatusName == "Pending Verification") {
                        //browser.click(KYC_CheckBox);
                        console.log(DocumentName + " is " + StatusName);
                    }
                    else if (StatusName == "Awaiting upload") {
                        //browser.click(KYC_CheckBox);
                        browser.pause(2000);
                        browser.setValue(KYC_UploadButton, ImagePath);
                        console.log(DocumentName + ": is uploaded");
                        browser.pause(2000);
                    }
                    else if (StatusName == "Rejected"){
                        console.log(DocumentName + " is Rejected")
                    }
                    else{
                        console.log("Documents are not fetched")
                    }

                    if (i != upload_Button_Count) {
                        browser.moveToObject("(.//*[@id='react-root']//center)[" + (i + 1) + "]");
                        browser.pause(2000);
                    }

                }

                // it('Should be able to Approve Kyc Documents', () => {

                //     browser.pause(3000);
                //     browser.click(Docs_Approval);
                //     var message = commonMethods.toastAlert();
                //     console.log("message is: " + message);
                //     browser.pause(5000);
                //     browser.click(UserActivation);
                //     var message = commonMethods.toastAlert();
                //     if (message === "User Approved successfully") {
                //         callback(null, message);
                //     }
                //     else {
                //         callback(message, null);
                //     }
                //     browser.pause(5000);
                // });
            }

            else {
                console.log("KYC documents are not available for the selected combination");
            }

            callback(null, "done");

        });

    })
}

module.exports = {

    hardRegistration

}