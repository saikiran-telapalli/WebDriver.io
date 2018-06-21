const commonMethods = require('../Utilities/commonMethods');

var AdditionalInfoStep = "(.//span[@class='step_name'])[2]";
var DateOfBirth = "//input[@placeholder ='Date Of Birth']";
var EmploymentDate = ".//input[@placeholder='Employment Date']";
var FoundationYear = "//input[@placeholder='Foundation Year']";
var AdditionalInfoSaveButton = "span.ml.my-ml-save";

var expect = require('chai').expect;

module.exports = {
    addinfo_IDE_Ind: () => {
        describe('Complete Additional info for Ideator as Individual :', () => {
            it('Should be able to complete additional info screen', () => {
                browser.pause(1000);
                browser.click(AdditionalInfoStep);
                browser.pause(1000);
                commonMethods.getRandomValue("Title");
                commonMethods.input_Value_Placeholder_Func("Middle Name", MiddleName);
                commonMethods.input_Value_Placeholder_Func("Display Name", DisplayName);
                //Handling DOB Calendar
                browser.click(DateOfBirth);
                commonMethods.past_DatePicker_Ind_Func(DOB_Mon_YYYY, DOB_Day, "date-of-birth");
                commonMethods.getRandomValue("Select Gender");
                commonMethods.multi_Select_Func("Select Citizenship Category", "Indian");
                browser.pause(1000);
                commonMethods.input_Value_Placeholder_Func("Qualification", Qualification);
                commonMethods.getRandomValue("Employment Status");
                commonMethods.input_Value_Placeholder_Func("Professional Tag", ProfessionalTag);
                commonMethods.input_Value_Placeholder_Func("Employer Name", EmployerName);
                commonMethods.input_Value_Placeholder_Func("Employer Website", EmployerWebsite);
                commonMethods.multi_Select_Func("Select Subdomain", SelectSubdomain);
                browser.click(EmploymentDate);
                commonMethods.past_DatePicker_Ind_Func(EMP_Mon_YYYY, EMP_Day, "date-time");
                if (AdminUsername) {
                    browser.click(AdditionalInfoSaveButton);
                }
                else {
                    browser.click("//span[@class='ml ml-save']");
                }
                browser.pause(6000);
            })

        })
    },

    addinfo_INV_Ind: () => {
        describe('Complete Additional info for Investor as individual :', () => {
            it('Should be able to complete additional info screen', () => {
                browser.pause(1000);
                browser.click(AdditionalInfoStep);
                browser.pause(1000);
                commonMethods.getRandomValue("Title");
                commonMethods.input_Value_Placeholder_Func("Middle Name", MiddleName);
                commonMethods.input_Value_Placeholder_Func("Display Name", DisplayName);

                //Handling DOB Calendar
                browser.click(DateOfBirth);
                commonMethods.past_DatePicker_Ind_Func(DOB_Mon_YYYY, DOB_Day, "date-of-birth");
                //commonMethods.past_DatePicker_Ind_Func("1995", "Jan", "23", "date-of-birth");
                commonMethods.getRandomValue("Select Gender");
                commonMethods.multi_Select_Func("Select Citizenship Category", "Indian");
                browser.pause(1000);
                commonMethods.getRandomValue("Select Currency");
                commonMethods.input_Value_Placeholder_Func("Enter Amount", "1000")

                commonMethods.input_Value_Placeholder_Func("Qualification", Qualification);
                commonMethods.getRandomValue("Employment Status");
                commonMethods.input_Value_Placeholder_Func("Professional Tag", ProfessionalTag);
                commonMethods.input_Value_Placeholder_Func("Employer Name", EmployerName);
                commonMethods.input_Value_Placeholder_Func("Employer Website", EmployerWebsite);
                commonMethods.multi_Select_Func("Select Subdomain", SelectSubdomain);
                browser.click(EmploymentDate);
                commonMethods.past_DatePicker_Ind_Func(EMP_Mon_YYYY, EMP_Day, "date-time");
                //commonMethods.past_DatePicker_Ind_Func("1995", "March", "23", "date-time");
                commonMethods.getRandomValue("Investing From");
                browser.click(AdditionalInfoSaveButton);
                browser.pause(5000);

            })

        })
    },

    addinfo_SP_Ind: () => {
        describe('Complete Additional info for Service Provider as individual :', () => {
            it('Should be able to complete additional info screen', () => {
                browser.pause(1000);
                browser.click(AdditionalInfoStep);
                browser.pause(1000);
                commonMethods.getRandomValue("Title");
                commonMethods.input_Value_Placeholder_Func("Middle Name", MiddleName);
                commonMethods.input_Value_Placeholder_Func("Display Name", DisplayName);


                //Handling DOB Calendar
                browser.click(DateOfBirth);
                commonMethods.past_DatePicker_Ind_Func(DOB_Mon_YYYY, DOB_Day, "date-of-birth");
                commonMethods.getRandomValue("Select Gender");
                commonMethods.multi_Select_Func("Select Citizenship Category", "Indian");

                browser.pause(1000);
                commonMethods.input_Value_Placeholder_Func("Qualification", Qualification);
                commonMethods.getRandomValue("Employment Status");
                commonMethods.input_Value_Placeholder_Func("Professional Tag", ProfessionalTag);
                commonMethods.input_Value_Placeholder_Func("Employer Name", EmployerName);
                commonMethods.input_Value_Placeholder_Func("Employer Website", EmployerWebsite);

                commonMethods.multi_Select_Func("Select Subdomain", SelectSubdomain);
                browser.click(EmploymentDate);
                commonMethods.past_DatePicker_Ind_Func(EMP_Mon_YYYY, EMP_Day, "date-time");
                commonMethods.input_Value_Placeholder_Func("Year of Experience", "10");

                browser.click(AdditionalInfoSaveButton);
                browser.pause(6000);


            })

        })
    },

    addinfo_STP_Com: (callback) => {
        describe('Complete Additional info for StartUp as company :', () => {
            it('Should be able to complete additional info screen', () => {
                browser.pause(2000);
                browser.click(AdditionalInfoStep);
                browser.pause(1000);

                commonMethods.input_Value_Placeholder_Func("Company Name", "Company Name");
                commonMethods.input_Value_Placeholder_Func("Group Name", "Group Name");
                commonMethods.input_Value_Placeholder_Func("Company Website", "Company Website");
                commonMethods.input_Value_Placeholder_Func("Company Email", "Company Email");

                //browser.pause(1000);
                commonMethods.drop_Down_Func("Select Type Of Company", "Public");
                commonMethods.drop_Down_Func("Select Type Of Entity", "NGOs");
                commonMethods.drop_Down_Func("Select Type Of Business", "B2C");
                commonMethods.multi_Select_Func("Select Subdomain", "others");
                commonMethods.drop_Down_Func("Select Stage Of Company", "Established");
                commonMethods.drop_Down_Func("Select Subsidiary Company", "yes");
                commonMethods.input_Value_Placeholder_Func("Registration Number", "Reg 1001");

                browser.click(FoundationYear);
                commonMethods.past_DatePicker_Func("June 2011", "27");

                commonMethods.drop_Down_Func("Headquarter Location", "Hyderabad");
                commonMethods.drop_Down_Func("Branch Location", "Hyderabad");
                commonMethods.input_Value_Placeholder_Func("ISO certification number", "ISO 5678");

                //Because full screen scroll
                browser.keys('Tab');
                commonMethods.input_Value_Placeholder_Func("Company Turnover", "100000");
                commonMethods.input_Value_Placeholder_Func("Partners", "Partners");
                commonMethods.input_Value_Placeholder_Func("Investors", "Investors");
                commonMethods.getRandomValue("Looking For");

                commonMethods.input_Value_Placeholder_Func("CEO Name", "CEO Name");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Management People", "10000");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Employee", "1000");
                commonMethods.input_Value_Placeholder_Func("Associate Company", "Associate Company");
                browser.click(AdditionalInfoSaveButton);
                var message = commonMethods.toastAlert();
                browser.pause(3000);
                if (message === "Saved successfully") {
                    callback(null, message);
                }
                else {
                    callback(message, null);
                }
                browser.pause(5000);


            })

        })
    },

    addinfo_COM_Com: () => {
        describe('Complete Additional info for Company as company :', () => {
            it('Should be able to complete additional info screen', () => {
                browser.click(AdditionalInfoStep);
                browser.pause(1000);

                commonMethods.input_Value_Placeholder_Func("Company Name", "Company Name");
                commonMethods.input_Value_Placeholder_Func("Group Name", "Group Name");
                commonMethods.input_Value_Placeholder_Func("Company Website", "Company Website");
                commonMethods.input_Value_Placeholder_Func("Company Email", "Company Email");

                //browser.pause(1000);
                commonMethods.drop_Down_Func("Select Type Of Company", "Public");
                commonMethods.drop_Down_Func("Select Type Of Entity", "NGOs");
                commonMethods.drop_Down_Func("Select Type Of Business", "B2C");
                commonMethods.multi_Select_Func("Select Subdomain", "others");
                commonMethods.drop_Down_Func("Select Stage Of Company", "Established");
                commonMethods.drop_Down_Func("Select Subsidiary Company", "yes");
                commonMethods.input_Value_Placeholder_Func("Registration Number", "Reg 1001");

                browser.click(FoundationYear);
                commonMethods.past_DatePicker_Func("June 2011", "27");

                commonMethods.drop_Down_Func("Headquarter Location", "Hyderabad");
                commonMethods.drop_Down_Func("Branch Location", "Hyderabad");
                commonMethods.input_Value_Placeholder_Func("ISO certification number", "ISO 5678");

                //Because full screen scroll
                browser.keys('Tab');
                commonMethods.input_Value_Placeholder_Func("Company Turnover", "100000");
                commonMethods.input_Value_Placeholder_Func("Partners", "Partners");
                commonMethods.input_Value_Placeholder_Func("Investors", "Investors");
                commonMethods.getRandomValue("Looking For");

                commonMethods.input_Value_Placeholder_Func("CEO Name", "CEO Name");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Management People", "10000");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Employee", "1000");
                commonMethods.input_Value_Placeholder_Func("Associate Company", "Associate Company");

                browser.click(AdditionalInfoSaveButton);

                browser.pause(6000);

            })

        })
    },

    addinfo_INS_Com: () => {
        describe('Complete Additional info for Institution as company :', () => {
            it('Should be able to complete additional info screen', () => {

                browser.pause(2000);
                browser.click(AdditionalInfoStep);
                browser.pause(1000);
                commonMethods.drop_Down_Func("Select Institution Type", "SubChapter");
                commonMethods.input_Value_Placeholder_Func("Institute Name ", "Institute Name");
                commonMethods.input_Value_Placeholder_Func("Institute Group Name", "Institute Group Name");
                browser.click(FoundationYear);
                commonMethods.past_DatePicker_Func("May 2012", "11");
                commonMethods.input_Value_Placeholder_Func("Website", "Website");
                commonMethods.input_Value_Placeholder_Func("Registration Number", "Registration Number");
                commonMethods.input_Value_Placeholder_Func("ISO Accrediation Number", "ISO Accrediation Number");

                commonMethods.input_Value_Placeholder_Func("Curriculam Provider", "Curriculam Provider");
                commonMethods.input_Value_Placeholder_Func("Associated University", "Associated University");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Students", "Total Number Of Students");
                commonMethods.input_Value_Placeholder_Func("Total Number Of Staff", "Total Number Of Staff");
                commonMethods.input_Value_Placeholder_Func("Chairman Name", "Chairman Name");
                commonMethods.input_Value_Placeholder_Func("Dean Name", "Dean Name");
                commonMethods.drop_Down_Func("Headquarter Location", "Hyderabad");
                commonMethods.multi_Select_Func("Branch Location", "Hyderabad");

                browser.click(AdditionalInfoSaveButton);
                browser.pause(6000);


            })
        })
    }

}

