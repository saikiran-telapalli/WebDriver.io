var AdditionalInfo = require('./addinfo_Allcommunities');
const variables = require('../Utilities/globalVariables');
const commonMethods = require('../Utilities/commonMethods');
var async = require("async")


var Reg_Additionalinfo = (callback) => {
    describe('Should fill Registration Additional info', () => {
        it('Should fill Registration Additional info successfully', () => {

            console.log("Additional info is executing");
            switch (Identity) {

                case "individual":

                    if (RegistrationType === "Ideators") {
                        console.log("RegistrationType: Ideator");
                        AdditionalInfo.addinfo_IDE_Ind();
                    }
                    else if (RegistrationType === "Investors") {
                        console.log("RegistrationType: Investor");
                        AdditionalInfo.addinfo_INV_Ind();
                    }
                    else if (RegistrationType === "Service Providers") {
                        AdditionalInfo.addinfo_SP_Ind();
                    }
                    else {
                        console.log("Registration Type does not exist with: " + RegistrationType + " as " + Identity);
                    }
                    break;

                case "company":

                    if (RegistrationType === "Startups") {
                        console.log("RegistrationType: Startups");
                        //AdditionalInfo.addinfo_STP_Com();
                        AdditionalInfo.addinfo_STP_Com(function (err, message) {
                            if (message) {
                                callback(null, message);
                            }
                        });
                    }
                    else if (RegistrationType === "Companies") {
                        console.log("RegistrationType: Companies");
                        AdditionalInfo.addinfo_COM_Com();
                    }
                    else if (RegistrationType === "Institutions") {
                        AdditionalInfo.addinfo_INS_Com();
                    }
                    else {
                        console.log("Registration Type does not exist with: " + RegistrationType + " as " + Identity);
                    }
                    break;

                default:

                    console.log("Indentity does not exist with: " + Identity);
            }
            
            callback(null, "done");
           
        });
    })

}



module.exports = {
    Reg_Additionalinfo
}
