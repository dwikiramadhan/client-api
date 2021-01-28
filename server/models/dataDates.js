const mongoose = require('mongoose');

const dataDateSchema = new mongoose.Schema({
    letter: String,
    frequency: Number,
});

module.exports = mongoose.model('DataDates', dataDateSchema)