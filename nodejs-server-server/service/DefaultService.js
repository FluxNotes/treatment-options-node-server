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
  /*
  return new Promise(function(resolve, reject) {
  
    const treatmentOptions = ['Chemo', 'Chemo+Rad', 'Hormonal', 'Radiation',
    'Surgery', 'Surg+Rad', 'No-Treatment'];

    let deceasedSeries = [];
    let aliveSeries = [];

    HardCodedTreatmentData.forEach((v) => {
    if (v.Disease === disease && v.Race === race && v['Dx-Grade'] === dxGrade && v['Is-Alive'] === 'Dead') {
        deceasedSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
    }
    if (v.Disease === disease && v.Race === race && v['Dx-Grade'] === dxGrade && v['Is-Alive'] === 'Alive') {
        aliveSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
    }  
    });
    resolve ([aliveSeries, deceasedSeries]);
    
  });*/
  handler.findTreatmentOptionsByPatientStats(params, res, next);
}


/**
 *
 * no response value expected for this operation
 **/
exports.treatmentOptionsOPTIONS = () => {
  Promise.resolve();
}

