var mongoose = require('mongoose');
const fs = require('fs');
const DataDates = require('../models/dataDates')

const db = "mongodb://localhost/cms";

var getData = fs.readFileSync(__dirname + '/data.json', 'utf8')
var data = JSON.parse(getData)

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function () {
    DataDates.insertMany(data)
        .then(function () {
            console.log("Data Inserted")
        })
        .catch(function (error) {
            console.log(error)
        });
})
// mongoose.connection.close()