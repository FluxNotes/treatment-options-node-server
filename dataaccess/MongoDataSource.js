const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

export default class MongoDataSource {

   findTreatmentOptionsByPatientStats = (params) => {
   
        Object.keys(params).forEach(key => params[key].value === undefined ? delete params[key] : '');
    
        let database;
        const demoFlag = process.argv.length > 2 && process.argv[2] === '--nodemo' ? false : true;
        return MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName)
        .then( async (database) => {
            const collection = database.collection('Treatment Options Data');
            const result = collection.find({Disease: params['disease'].value}).toArray();
        
            return result;
        })
        .then( mongoData => {
      
            let alive = [];
            let deceased = [];
            mongoData.forEach(entry => {
                Object.keys(params).forEach(key => {
                    if(entry[key] === params[key].value && entry['Is-Alive'] === 'Alive') {
                        alive.push([ entry['Treat-option'], entry['Survival-months'] ]);
                    }
                    if(entry[key] === params[key].value && entry['Is-Alive'] === 'Dead') {
                        deceased.push([ entry['Treat-option'], entry['Survival-months'] ]);
                    }
                })
            });
         
            return([alive, deceased]);
        })
    }

}