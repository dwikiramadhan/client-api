var seeder = require('mongoose-seed');
const fs = require('fs');

const db = "mongodb://localhost/cms";

var getData = fs.readFileSync(__dirname + '/data.json', 'utf8')
var data = JSON.parse(getData)

seeder.connect(db, {useNewUrlParser: true, useUnifiedTopology: true}, function () {
    seeder.loadModels([
        '../models/dataDates'
    ]);
    seeder.clearModels(['DataDates']);
    seeder.populateModels(data, function (err, done) {
        if (err) {
            return console.log("seed err", err)
        }
        if (done) {
            return console.log('seed done', done)
        }
        seeder.disconnect()
    })
})
