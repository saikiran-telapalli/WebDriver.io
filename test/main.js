var async = require("async")
var loginmoolya = require('./logIn.js');
var adminTransactions = require('./adminTransactions.js');
var createRegistrationTestCase = require('./createRegistration.js');
var emailVerification = require('./emailVerification.js');
var FilterRecord = require('./filterReg_Record');
var softRegistrationTestCase = require('./softRegistration.js');
var additionalinfo = require('./addinfo_Allcommunities.js');
var AdditionalInfo = require('./Reg_Additinalinfo.js');
var HardRegistration = require('./hardRegistration');
var UserApproval = require('./userApproval');
var PendingRegistration = require('./pendingRegistration');
var LogOut = require('./logOut');


var loginAdmin = (callback) => {
    loginmoolya.login(AdminUsername, AdminPassword, function (err, resp) {
        if (resp) {
            callback(null)
        }
    })
}

var loginUser = (callback) => {
    loginmoolya.login("mireillebuckridge45@qa.moolya.global", Email_Password, function (err, resp) {
        if (resp) {
            callback(null)
        }
    })
}

var transaction = (callback) => {
    adminTransactions.adminTransactions(function (err, resp) {
        if (resp) {
            callback(null)
        }
    })
}
var createReg = (callback) => {
    createRegistrationTestCase.createRegistration(function (err, resp) {
        if (err) console.log("oppps error in Create Registration :", err);
        if (resp) {
            console.log(resp);
            callback(null)
        }
    })
}

var verifyEmail = (callback) => {
    emailVerification.emailVerification(function (err, resp) {
        if (resp) {
            callback(null)
        }
    })
}

var filterReg = (callback) =>{
    FilterRecord.filter_RegRecord(function (err, resp) {
        if(resp){
            callback(null);
        }
    })
}

var softReg = (callback) => {
   
    softRegistrationTestCase.softRegistration(function (err, resp) {
        if (err) console.log("oppps error in Soft Registration :", err);
        if (resp) {
            console.log(resp);
            callback(null)
        }
    
    })
}

var pendingReg = (callback) => {
    PendingRegistration.pendingRegistration(function (err, resp){
        if(resp){
            callback(null);
        }
    })
}

var addInfo = (callback) => {
    AdditionalInfo.Reg_Additionalinfo(function (err, resp) {
       if (err) console.log("oppps error in Additional info :", err);
        if (resp) {
            console.log(resp);
            callback(null)
        }
    });
}

var hardReg = (callback) => {
    HardRegistration.hardRegistration(function (err, resp) {
        if (resp) {
            callback(null)
        }
    })
}

var adminApproves = (callback) => {
    UserApproval.userApproval(function (err, resp) {
        if (err) console.log("oppps error in Hard Registration :", err);
        if (resp) {
            console.log(resp);
            callback(null)
        }
    })
}

var logout = (callback) =>{
    LogOut.logOut(function (err, resp){
        if(resp){
            callback(null);
        }
    })
}

var platformAdmin = () => {

    async.waterfall([
        loginAdmin,
        transaction,
        createReg,
        verifyEmail,
        transaction,
        filterReg,
        softReg,
        addInfo,
        hardReg,
        adminApproves
    ])

};

var endUser = () => {
    async.waterfall([
        // loginAdmin,
        // transaction,
        // createReg,
        // verifyEmail,
        // transaction,
        // softReg,
        // logout,
        loginUser,
        //pendingReg,
        addInfo,
        hardReg,
        logout,
        loginAdmin,
        transaction,
        softReg,
        adminApproves
    ])
}



platformAdmin();
//endUser();

// var platformAdmin = async () => {
// await loginmoolya.login();
// await adminTransactions.adminTransactions();
// await createRegistrationTestCase.createRegistration();
// await emailVerification.emailVerification();
// await adminTransactions.adminTransactions();
// await softRegistrationTestCase.softRegistration();
// await additionalinfo.addinfo_INV_Ind();
// //await AdditionalInfo.Reg_Additionalinfo();
// await HardRegistration.hardRegistration();

// }