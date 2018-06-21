var mocha = require('mocha')
var async = require('async')
const drop_DownSelection = require('../Utilities/commonMethods.js');

var filterICon = ".//div[@class='filter_btn']"
var filterSave = ".//span[@class='ml ml-save']"
var filterCancel = ".//span[@class='ml ml-delete']"
var editActionButton = ".//span[@class='ml ml-edit']"


var ClusterFiltering = async () =>{
    drop_DownSelection.drop_Down_Func_Index("Cluster", 2, clusterName, function (err, resp) {
        if (resp) {
           return resp 
       }
       browser.pause(1000)
   })
}

var ChapterFiltering = async () =>{
    drop_DownSelection.drop_Down_Func_Index("Chapter", 2, chapterName, function(err, resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    })
}

var SubChapterFiltering = () =>{
    drop_DownSelection.drop_Down_Func_Index("Sub Chapter", null, subchapterName, function(err,resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    })
}

var communityFiltering = () =>{
    drop_DownSelection.drop_Down_Func_Index("Community", 2, communityName, function(err, resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    })
}

var IndustryFiltering = () =>{
    drop_DownSelection.drop_Down_Func_Index("Industry", null, industryName, function(err, resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    })
}

var UserCategoryFiltering = () =>{
    drop_DownSelection.drop_Down_Func_Index("User Type", null, userCategoryName, function(err, resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    })
}

var IdentityFiltering = () =>{
    drop_DownSelection.drop_Down_Func("Identity", null, identity, function(err, resp){
        if(resp){
            return resp
        }
        browser.pause(1000)
    }) 
}

var UsernameFiltering = () =>{
    drop_DownSelection.drop_Down_Func("Email", Email_id)
    browser.pause(1000)
}


 // var ChapterFiltering = drop_DownSelection.drop_Down_Func("Chapter", chapterName)
// var SubChapterFiltering = drop_DownSelection.drop_Down_Func("Sub Chapter", subchapterName)
// var CommunityFiltering = drop_DownSelection.drop_Down_Func("Community", communityName)
// var UserCategoryFiltering = drop_DownSelection.drop_Down_Func("User Type", userCategoryName)
// var IndustryFiltering = drop_DownSelection.drop_Down_Func("Industries", industryName)
// var IdentityFiltering = drop_DownSelection.drop_Down_Func("Identity", identity)

var WhichFIlterDoYouWant = (values) =>{
    describe('filter', () =>{
        it('filtering', ()=>{
            browser.click(filterICon)
            switch(values){
                case "Cluster":
                  ClusterFiltering();
                break;
                
                case "Chapter":
                ClusterFiltering()
                ChapterFiltering()
                break;
                
                case "Sub Chapter":
                ClusterFiltering()
                ChapterFiltering()
                SubChapterFiltering()
                break;
                
                case "Community":
                communityFiltering()
                break;

                case "documentTabFiltering":
                ClusterFiltering()
                ChapterFiltering()
                SubChapterFiltering()
                communityFiltering()
                UserCategoryFiltering()
                IndustryFiltering()
                IdentityFiltering()
                break;

                case "Email":
                UsernameFiltering()
                break
            }
            browser.pause(1000)
            browser.click(filterSave)
            browser.pause(2000)
            browser.click(".//table[@class='table table-striped table-bordered table-hover']/tbody/tr[1]/td[1]/input")
            browser.pause(10000)
            browser.click(editActionButton)
            browser.pause(1000)
        })
    })
}


    module.exports = {
        WhichFIlterDoYouWant
}
