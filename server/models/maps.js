const mongoose = require('mongoose');

const mapsSchema = new mongoose.Schema({
    id: Number,
    title: String,
    lat: Number,
    lang: Number,
});

module.exports = mongoose.model('Maps', mapsSchema)