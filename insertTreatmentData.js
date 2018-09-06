const MongoClient = require('mongodb').MongoClient;
const HardCodedTreatmentData = require('./dataaccess/HardCodedTreatmentData.json');
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

const dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
dbPromise.then(function(database) {
    var collection = database.collection('Treatment Options Data');
    collection.remove();
    var insertData = collection.insertMany(HardCodedTreatmentData);
    insertData.then(function(result) {
        console.log(result.insertedCount + " treatment data entries inserted.");
        process.exit();
    });
}, function(err) {
    console.log(err);
    process.exit();
});