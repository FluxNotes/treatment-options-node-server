var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

export default class MongoDataSource {

    findTreatmentOptionsByPatientStats = (disease, race, dxGrade) => {
        const treatmentOptions = ['Chemo', 'Chemo+Rad', 'Hormonal', 'Radiation',
        'Surgery', 'Surg+Rad', 'No-Treatment'];
        var database;
        var dbPromise = MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName);
        return dbPromise.then(function(database){
            var collection = database.collection('entries');
            var result = collection.find({Disease: disease}).toArray();
            let alive = [];
            let deceased = [];
            return result.then(function(result2) {
                result2.forEach(entry => {
                    if(entry.Race === race && entry['Dx-Grade'] === dxGrade && entry['Is-Alive'] === 'Alive'){
                        alive.push([ treatmentOptions.indexOf(entry['Treat-option'])  , entry['Survival-months'] ]);
                    }
                    if(entry.Race === race && entry['Dx-Grade'] === dxGrade && entry['Is-Alive'] === 'Dead'){
                        deceased.push([ treatmentOptions.indexOf(entry['Treat-option'])  , entry['Survival-months'] ]);
                    }
                });
                console.log("reached mongo");
                return [alive, deceased];
            });
        }, function(err) {
            console.log(err);
            return null;
        });
    }
}