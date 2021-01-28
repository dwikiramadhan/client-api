const mongoose = require('mongoose');

const dataDateSchema = new mongoose.Schema({
    id: Number,
    letter: String,
    frequency: Number,
});

module.exports = mongoose.model('DataDates', dataDateSchema)