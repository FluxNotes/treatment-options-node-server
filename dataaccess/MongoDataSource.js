const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

export default class MongoDataSource {

   findTreatmentOptionsByPatientStats = (disease, race, dxGrade) => {
        let database;
        const demoFlag = process.argv.length > 2 && process.argv[2] === '--nodemo' ? false : true;
        return MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName)
        .then( database => {
            const collection = database.collection('Treatment Options Data');
            const result = collection.find({Disease: disease}).toArray();
            return result;
        })
        .then( mongoData => {
      
            let alive = [];
            let deceased = [];
            mongoData.forEach(entry => {
                if((race === "undefined" ? true : (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Alive'){
                    alive.push([ entry['Treat-option'], entry['Survival-months'] ]);
                }
                if((race === "undefined" ? true: (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Dead'){
                    deceased.push([ entry['Treat-option'], entry['Survival-months'] ]);
                }
            });
            return({isDemo: demoFlag, data:{alive: alive, deceased: deceased}});
        })
    }

}