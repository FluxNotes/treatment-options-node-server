var MongoClient = require('mongodb').MongoClient;
var HardCodedTreatmentData = require('./dataaccess/HardCodedTreatmentData.json');
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

var result = null;
var database;
var dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
dbPromise.then(function(database) {
    var collection = database.collection('entries');
    var insertData = collection.insertMany(HardCodedTreatmentData);
    insertData.then(function(result) {
        console.log(result.insertedCount + "treatment data entries inserted.");
        process.exit();
    });
}, function(err) {
    console.log(err);
    process.exit();
});