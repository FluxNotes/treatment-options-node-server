'use strict'
import MongoDataSource from '../dataaccess/MongoDataSource';
import Lang from 'lodash';

function findTreatmentOptionsByPatientStats(args, res, next) {
    const da = new MongoDataSource();
    const disease = args['Disease'].value;
    const race = args['Race'].value;
    const dxGrade = args['dxGrade'].value;
    try{
        const data = da.findTreatmentOptionsByPatientStats(disease, race, dxGrade);
        data.then(function(result) {
            console.log()
            if(typeof result === 'string'){
                res.statusCode = 500;
                res.write("Internal failure");
                res.end();
            }
            else if (Lang.isEmpty(result[0]) && Lang.isEmpty(result[1])) {
                res.statusCode = 404;
                res.write(JSON.stringify(result));
                res.end();
            }
            else {
                res.write(JSON.stringify(result));
                res.end();
            }
        });
    } catch (err) {
        res.write(err);
        res.end();
    }
}

module.exports = {
    findTreatmentOptionsByPatientStats
};