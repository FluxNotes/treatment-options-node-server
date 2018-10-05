'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.findTreatmentOptionsByPatientStats = function findTreatmentOptionsByPatientStats (req, res, next) {
  Default.findTreatmentOptionsByPatientStats(req.swagger.params)
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
