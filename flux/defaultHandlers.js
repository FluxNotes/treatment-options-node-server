'use strict'
import MongoDataSource from '../dataaccess/MongoDataSource';
import Lang from 'lodash';

function findTreatmentOptionsByPatientStats(disease, opts, resolve,reject) {
    const da = new MongoDataSource();
    return da.findTreatmentOptionsByPatientStats(disease, opts);
}

module.exports = {
    findTreatmentOptionsByPatientStats
};