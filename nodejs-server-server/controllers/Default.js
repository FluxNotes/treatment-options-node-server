'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.findTreatmentOptionsByPatientStats = function findTreatmentOptionsByPatientStats (req, res, next) {
  //console.log(req.swagger.params)
  const disease = req.swagger.params['disease'].value;
  delete req.swagger.params['disease'];
  Default.findTreatmentOptionsByPatientStats(disease, req.swagger.params)
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
