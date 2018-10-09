const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;
const mongoHost = 'localhost';
const mongoPort = 27017;
const databaseName = 'treatment-options';

export default class MongoDataSource {

   findTreatmentOptionsByPatientStats = async (params) => {
   
        Object.keys(params).forEach(key => params[key].value === undefined ? delete params[key] : '');
    
        let database;
        const demoFlag = process.argv.length > 2 && process.argv[2] === '--nodemo' ? false : true;
        return MongoClient.connect("mongodb://" + mongoHost + ":" + mongoPort + "/" + databaseName)
        .then( async (database) => {
            //console.log('disease is', params['disease'].value)
            const collection = database.collection('Treatment Options Data');
            const result = await collection.find({Disease: params['disease'].value}).toArray();
        
            return result;
        })
        .then( mongoData => {
      
            let alive = [];
            let deceased = [];
            result2.forEach(entry => {
                //if((race === "undefined" ? true : (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Alive'){
               /*  if (Object.keys(params).forEach(key => {
                    entry[key] === params[key].value
                }) && entry['Is-Alive'] === 'Alive'){
                    console.log(params[key])
                    console.log('adding to alive array')
                    alive.push([ entry['Treat-option'], entry['Survival-months'] ]);
                } */
                Object.keys(params).forEach(key => {
                    if(entry[key] === params[key].value && entry['Is-Alive'] === 'Alive') {
                        alive.push([ entry['Treat-option'], entry['Survival-months'] ]);
                    }
                    if(entry[key] === params[key].value && entry['Is-Alive'] === 'Dead') {
                        deceased.push([ entry['Treat-option'], entry['Survival-months'] ]);
                    }
                })
                //if((race === "undefined" ? true: (entry.Race === race)) && (dxGrade === "undefined" ? true: (entry['Dx-Grade'] === dxGrade)) && entry['Is-Alive'] === 'Dead'){
               /*  if (Object.keys(params).forEach(key => {
                    entry[key] === params[key].value
                }) && entry['Is-Alive'] === 'Dead') { 
                    console.log('adding to deceased array')
                    deceased.push([ entry['Treat-option'], entry['Survival-months'] ]);
                } */
            });
         
            return([alive, deceased]);
        })
    }

}