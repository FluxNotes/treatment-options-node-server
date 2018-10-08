'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.findTreatmentOptionsByPatientStats = function findTreatmentOptionsByPatientStats (req, res, next) {
  var disease = req.swagger.params['Disease'].value;
  var race = req.swagger.params['Race'].value;
  var dxGrade = req.swagger.params['dxGrade'].value;
  Default.findTreatmentOptionsByPatientStats(disease,race,dxGrade)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.treatmentOptionsOPTIONS = function treatmentOptionsOPTIONS (req, res, next) {
  Default.treatmentOptionsOPTIONS()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
