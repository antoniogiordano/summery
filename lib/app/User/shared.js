'use strict';

/**
 * Created by AntonioGiordano on 03/06/16.
 */

var Joi = require('joi');

module.exports.loginValidation = Joi.object().keys({
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(8).max(50).required()
});

module.exports.registrationValidation = Joi.object().keys({
  username: Joi.string().min(3).max(20).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(50).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required()
});