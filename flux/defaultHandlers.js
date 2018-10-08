'use strict'
import MongoDataSource from '../dataaccess/MongoDataSource';
import Lang from 'lodash';

function findTreatmentOptionsByPatientStats(disease,race,dxGrade,resolve,reject) {
    const da = new MongoDataSource();
    return da.findTreatmentOptionsByPatientStats(disease, race, dxGrade);
}

module.exports = {
    findTreatmentOptionsByPatientStats
};