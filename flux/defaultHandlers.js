'use strict'
import MongoDataSource from '../dataaccess/MongoDataSource';
import Lang from 'lodash';

function findTreatmentOptionsByPatientStats(args, res, next) {
    const da = new MongoDataSource();
    var disease = args['Disease'].value;
    var race = args['Race'].value;
    var dxGrade = args['dxGrade'].value;
    var data = da.findTreatmentOptionsByPatientStats(disease, race, dxGrade);
    if(!Lang.isUndefined(data) && !Lang.isNull(data)) {
        data.then(function(result) {
            res.write(JSON.stringify(result));
            res.end();
        });
    } else {
        res.statusCpde = 404;
        res.statusMessage = "Patient not found."
        res.write("No treatment data found for patient stats.");
    }
}

module.exports = {
    findTreatmentOptionsByPatientStats
};