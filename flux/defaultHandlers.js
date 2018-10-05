'use strict'
import MongoDataSource from '../dataaccess/MongoDataSource';
import Lang from 'lodash';

function findTreatmentOptionsByPatientStats(args, resolve,reject) {
    const da = new MongoDataSource();
    return da.findTreatmentOptionsByPatientStats(args);
}

module.exports = {
    findTreatmentOptionsByPatientStats
};