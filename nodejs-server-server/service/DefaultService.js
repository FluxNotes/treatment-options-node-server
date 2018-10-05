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
 * ageAtDiagnosis String age at diagnosis filter (optional)
 * gender String patient gender filter (optional)
 * stageAtDiagnosis String stage at diagnosis filter (optional)
 * mitosisCount String mitosis count filter (optional)
 * cancerSite String cancer site filer (optional)
 * surgery String surgery recieved filter (optional)
 * pastTreatments List Treatments recieved in past (optional)
 * hemoglobin String lab result for hemoglobin filter (optional)
 * albumin String lab result for albumin filter (optional)
 * cD117/KIT String immunohistochemical finding (optional)
 * cD34 String immunohistochemical finding (optional)
 * αSmooth muscle actin String immunohistochemical finding (optional)
 * desmin String immunohistochemical finding (optional)
 * s100 String immunohistochemical finding (optional)
 * ki67 index String immunohistochemical finding (optional)
 * returns List
 **/
exports.findTreatmentOptionsByPatientStats = (params) => {
  return handler.findTreatmentOptionsByPatientStats(params);
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
