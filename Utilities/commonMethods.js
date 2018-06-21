var expect = require('chai').expect;


//past_DatePicker FUNCTION
function past_DatePicker_Func(expected_month_Year, expectedDate) {
    console.log("calIndex: " + expected_month_Year, expectedDate);
    var month_Year = ".//th[@class='rdtSwitch']"
    var prevArrow = ".//th[@class='rdtPrev']"
    var dateSelected = ".//td[@class='rdtDay']"

    var mon_Year = browser.getText(month_Year);
    //console.log("mon_Year: " + mon_Year);
    // var dob = JSON.stringify(dob_Mon_Year);
    // console.log("dob: "+typeof(dob));
    console.log("expected_month_Year: " + expected_month_Year);
    while (expected_month_Year != changed_month_Year) {

        if (expected_month_Year === mon_Year) {
            //console.log("Present Month & Year is matched");
            break;
        }
        browser.click(prevArrow);
        var changed_month_Year = browser.getText(month_Year);
    }
    //console.log("Matched with expected");

    var count = browser.getElementSize(dateSelected);
    //console.log("Count type is: " + typeof (count));
    var number = Object.keys(count).length;

    for (var i = 1; i <= number; i++) {
        var count = browser.getElementSize(dateSelected);
        var day = browser.getText("(.//td[@class='rdtDay'])[" + i + "]");
        if (day === expectedDate) {
            browser.click("(.//td[@class='rdtDay'])[" + i + "]");
            //console.log("Date: " + day + " is selected");
            break;
        }
    }


}

//Drop down selection function
function drop_Down_Func(xpathText, value) {
    //xpathText= Select Type Of Industry
    browser.click("//div[text()= '" + xpathText + "']");
    browser.setValue("//div[text()= '" + xpathText + "']/following-sibling::div/input", value);
    browser.pause(2000);
    browser.keys('ArrowDown');
    browser.keys('Enter')
}

//Drop down selection function if having same xpath differentiating with index
function drop_Down_Func_Index(xpathText, index, value, callback){
    index = index||1
    //xpathText= Select Type Of Industry
    browser.click("(//div[text()= '" + xpathText + "'])["+index+"]");
    browser.setValue("//div[text()= '" + xpathText + "']/following-sibling::div/input", value);
    browser.pause(1000);
    //.waitForSelected(".//div[text()='Select Sub Chapter']/following-sibling::div/input", 3000)
    browser.keys('ArrowDown');
    browser.keys('Enter')
    callback(null,'done')
}

function input_Value_Placeholder_Func(xpath_Placeholder, value) {
    //xpath_Placeholder = 'First Name'
    browser.setValue(".//input[@placeholder= '" + xpath_Placeholder + "']", value);
}

function multi_Select_Func(xpathText, vaule) {
    browser.click("//div[text()= '" + xpathText + "']");
    browser.setValue("//div[text()= '" + xpathText + "']/following-sibling::div/input", vaule);
    browser.keys('ArrowDown');
    browser.keys('Enter')
    browser.keys('Escape');
}

function past_DatePicker_Ind_Func(expected_DOB, expectedDate, xpathID) {
    var month_Year = ".//*[@id='" + xpathID + "']/div/div/div/table/thead/tr[1]/th[2]"
    var prevArrow = ".//*[@id='" + xpathID + "']/div/div/div/table/thead/tr[1]/th[1]"
    var dateSelected = ".//td[@class='rdtDay']"

    var mon_Year = browser.getText(month_Year);
    //console.log("mon_Year: " + mon_Year);
    //console.log("Expected_DOB: " + expected_DOB);
    while (expected_DOB != changed_DOB) {

        if (expected_DOB === mon_Year) {
            //console.log("Present Month & Year is matched");
            break;
        }
        browser.click(prevArrow);
        var changed_DOB = browser.getText(month_Year);
    }
    console.log("Matched with expected");

    var count = browser.getElementSize(dateSelected);
    var number = Object.keys(count).length;

    for (var i = 1; i <= number; i++) {
        var count = browser.getElementSize(dateSelected);
        var day = browser.getText("(.//td[@class='rdtDay'])[" + i + "]");

        if (day === expectedDate) {
            browser.click("(.//td[@class='rdtDay'])[" + i + "]");
            //console.log("Date: " + day + " is selected");
            break;
        }
    }


}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Random drop down selection
function getRandomValue(xpathText) {
    browser.click("//div[text()= '" + xpathText + "']");
    var dropsize = browser.getElementSize(".//div[@class='Select-menu-outer']/div/div");
    var dropdownSize = Object.keys(dropsize).length;
    var ranNum = getRandomInt(1, dropdownSize - 1);
    var value = browser.getText("(.//div[@class='Select-menu-outer']/div/div)[" + ranNum + "]");
    browser.pause(1000);
    browser.setValue("//div[text()= '" + xpathText + "']/following-sibling::div/input", value);
    browser.pause(1000);
    browser.keys('ArrowDown');
    browser.keys('Enter');
}

function waitForElementToVisible(locator) {
    browser.waitForVisible(locator, 30000)
    browser.then(function (visible) {
        expect(visible).toBe(true);
    })
}

function toastAlert(){
    browser.pause(1000);
    return browser.getText(".toast-message");  
}

module.exports = {
    past_DatePicker_Func,
    past_DatePicker_Ind_Func,
    drop_Down_Func,
    drop_Down_Func_Index,
    input_Value_Placeholder_Func,
    multi_Select_Func,
    getRandomInt,
    getRandomValue,
    waitForElementToVisible,
    toastAlert
}














// function past_DatePicker_Ind_Func(expected_YYYY, expected_Month, expected_Date, xpathID) {
//     var month_Year = ".//*[@id='" + xpathID + "']/div/div/div/table/thead/tr[1]/th[2]";
//     var prevArrow = ".//*[@id='" + xpathID + "']/div/div/div/table/thead/tr[1]/th[1]"
//     var dateSelected = ".//td[@class='rdtDay']"

//     browser.click(month_Year);
//     var YYYY = browser.getText(month_Year);
//     console.log("YYYY: " + YYYY);
//     console.log("Expected_YYYY: " + expected_YYYY);
//     while (expected_YYYY != changed_YYYY) {

//         if (expected_YYYY === YYYY) {
//             console.log("Present Year is matched");
//             break;
//         }
//         browser.click(prevArrow);
//         var changed_YYYY = browser.getText(month_Year);
//     }
//     console.log("Matched with expected");

//     var Month_Size = browser.getElementSize(".//td[@class='rdtMonth']");
//     var MonthsCount = Object.keys(Month_Size).length;
//     console.log("monthsCount: "+MonthsCount);

//     browser.pause(2000);
//     for (var i = 1; i <= MonthsCount; i++) {

//         //var month = browser.getText(".//*[@id='date-of-birth']/div/div/div/table[2]/tbody/tr[1]/td[5]");
//         var month = browser.getText("(.//td[@class='rdtMonth'])[" + i + "]");
//         console.log("month: "+month)
//         if (month === expected_Month) {
//             browser.click("(.//td[@class='rdtMonth'])[" + i + "]");
//             console.log("Month: " + month + " is selected");
//             break;
//         }
//     }
//     var Day_Size = browser.getElementSize(dateSelected);
//     var DayCount = Object.keys(Day_Size).length;
//     console.log("DayCount: "+DayCount);

//     for (var i = 1; i <= DayCount; i++) {
//         var day = browser.getText("(.//td[@class='rdtDay'])[" + i + "]");

//         if (day === expected_Date) {
//             browser.click("(.//td[@class='rdtDay'])[" + i + "]");
//             console.log("Date: " + day + " is selected");
//             break;
//         }
//     }


// }