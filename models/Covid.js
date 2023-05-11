const mongoose = require("mongoose");

const CovidSchema = new mongoose.Schema({

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
});


const Covid = mongoose.model('covid', CovidSchema);
module.exports = Covid;

