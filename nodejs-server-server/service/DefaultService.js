'use strict';
const HardCodedTreatmentData = require('../../dataaccess/HardCodedTreatmentData.json');
const handler = require('../../flux/defaultHandlers');

/**
 * Get treatment options given filters
 * Return treatment options for the following filters
 *
 * disease String disease filter
 * race String race filter (optional)
 * dxGrade String grade of disease filter (optional)
 * returns List
 **/
exports.findTreatmentOptionsByPatientStats = (params, res, next) => {
  handler.findTreatmentOptionsByPatientStats(params, res, next);
}


/**
 *
 * no response value expected for this operation
 **/
exports.treatmentOptionsOPTIONS = () => {
  Promise.resolve();
}

