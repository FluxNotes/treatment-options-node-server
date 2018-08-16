'use strict';
const HardCodedTreatmentData = require('../../dataaccess/HardCodedTreatmentData.json');

/**
 * Get treatment options given filters
 * Return treatment options for the following filters
 *
 * disease String disease filter
 * race String race filter (optional)
 * dxGrade String grade of disease filter (optional)
 * returns List
 **/
exports.findTreatmentOptionsByPatientStats = function(disease,race,dxGrade) {
  return new Promise(function(resolve, reject) {
  
    const treatmentOptions = ['Chemo', 'Chemo+Rad', 'Hormonal', 'Radiation',
    'Surgery', 'Surg+Rad', 'No-Treatment'];

    let deceasedSeries = [];
    let aliveSeries = [];

    HardCodedTreatmentData.forEach((v) => {
    if(v.Disease === disease && v.Race === race && v['Dx-Grade'] === dxGrade && v['Is-Alive'] === 'Dead'){
    deceasedSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
    }
    if(v.Disease === disease && v.Race === race && v['Dx-Grade'] === dxGrade && v['Is-Alive'] === 'Alive'){
    aliveSeries.push([ treatmentOptions.indexOf(v['Treat-option'])  , v['Survival-months'] ]);
    }  
    });
    resolve ([aliveSeries, deceasedSeries]);
    
/*
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }*/
  });
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

