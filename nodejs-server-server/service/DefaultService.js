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
exports.findTreatmentOptionsByPatientStats = (disease,race,dxGrade) => {
  return handler.findTreatmentOptionsByPatientStats(disease,race,dxGrade);
}


/**
 *
 * no response value expected for this operation
 **/
exports.treatmentOptionsOPTIONS = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
