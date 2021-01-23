const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: Number,
    letter: String,
    frequency: Number,
});

module.exports = mongoose.model('Datas', dataSchema)