const { text } = require('express');
const mongoose=require('mongoose')
//const bcrypt=require('bcrypt')
const addressModel=require('./Address')


const userSchema= new mongoose.Schema({

    id:{
        type: Number,
        unique: true,
        min:10000000, 
        max:999999999


    },

    firstName :{
        type: String,
        required: true
        //trim:true,
        //minlength :[3,'Minimum name length is 3 characters']
    },
    lastName: {
        type: String,
        //required: true
        //trim:true,
        //minlength :[3,'Minimum name length is 3 characters']
    },


    phoneNumber:{
        type: Number,
        min:100000000, 
        max:99999999999

    },

    tel:{
        type: Number,
        min:10000000, 
        max:9999999999

    },


    city: {
        type: String,
        lowercase: true,
        //enum: citiesArray,

    },
    street: {
        type: String
    },
    houseNumber: {
        type: String
    },
    // address: {
    //     type: addressModel.schema
    // } ,

    // picture:{
    //     data: Buffer,
    //     contentType: String
    // },

    birthday:{
        type: Date,
        //required: true,
        //trim: true,
    },

    vaccDate1: {
        type: Date,
    },
    vaccManufacturer1: {
        type: String,
    },
    vaccDate2: {
        type: Date,
    },
    vaccManufacturer2: {
        type: String,
    },
    vaccDate3: {
        type: Date,
    },
    vaccManufacturer3: {
        type: String,
    },
    vaccDate4: {
        type: Date,
    },
    vaccManufacturer4: {
        type: String,
    },
    positiveDate: {
        type: Date,
    },
    recoveryDate: {
        type: Date,
    },



})//,{timestamp: true})



const User = mongoose.model('userPatient', userSchema)
module.exports = {User};

