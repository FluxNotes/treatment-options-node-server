const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

export default class MongoDataSource {

   findTreatmentOptionsByPatientStats = (disease, race, dxGrade) => {
        const treatmentOptions = ['Chemo', 'Chemo+Rad', 'Hormonal', 'Radiation',
        'Surgery', 'Surg+Rad', 'No-Treatment'];
        let database;
        return MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName)
        .then( database => {
            const collection = database.collection('Treatment Options Data');
            const result = collection.find({Disease: disease}).toArray();
            return result;
        })
        .then( result2 => {
            let alive = [];
            let deceased = [];
            result2.forEach(entry => {
                if((race === "undefined" ? true : (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Alive'){
                    alive.push([ treatmentOptions.indexOf(entry['Treat-option'])  , entry['Survival-months'] ]);
                }
                if((race === "undefined" ? true: (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Dead'){
                    deceased.push([ treatmentOptions.indexOf(entry['Treat-option'])  , entry['Survival-months'] ]);
                }
            });
            return([alive, deceased]);
        })
        .catch(function(err) {
            return err.message;
        }) ; 
    }
}