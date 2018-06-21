/**
 *@author Dhruv Choudhary
 */
'use strict';
const faker = require('faker');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();
var ms=today.getMilliseconds();
var sec=today.getSeconds();
var secms=sec+''+ms;

const User = {

    firstName:faker.name.firstName(),
    lastName:faker.name.lastName(),
    findName:faker.name.findName(),
    prefix: faker.name.prefix(),
    suffix:faker.name.suffix(),
    random:faker.random.word(),


    number:faker.random.number({min:100000, max:900000}),
    website: faker.internet.url(),
    password:"Moolya@123",

    company:faker.company.companyName(),

    address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),

    bio: faker.lorem.sentences(),
    word:faker.lorem.word()+secms,

    phone: "91"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneIDE:"92"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneSTU:"93"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneCMP:"94"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneSPS:"95"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneFUN:"96"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneINS:"97"+(Math.floor(Math.random() * 90000000) + 10000000),

    phoneOfficePrincipal:"98"+(Math.floor(Math.random() * 90000000) + 10000000),
    phoneOfficeTeam:"99"+(Math.floor(Math.random() * 90000000) + 10000000),
    
    email: faker.name.firstName() + faker.name.lastName()+getRandomInt(1, 100)+ "@qa.moolya.global",
    emailIDE:faker.lorem.word()+secms+ "ideator@ait.moolya.global",
    emailINS:faker.lorem.word()+secms+ "institute@ait.moolya.global",
    emailSTU:faker.lorem.word()+secms+ "startup@ait.moolya.global",
    emailFUN:faker.lorem.word()+secms+ "investor@ait.moolya.global",
    emailCMP:faker.lorem.word()+secms+ "company@qa.moolya.global",
    emailSPS:faker.lorem.word()+secms+ "service@ait.moolya.global",
    
    emailPrincipal:faker.lorem.word()+secms+ "principal@ait.moolya.global",
    emailTeam:faker.lorem.word()+secms+ "team@ait.moolya.global",

    

    image: faker.image.avatar()
    
};



module.exports = User;