const Joi = require('joi');

Joi.string().guid({ version: 'uuidv4'})
Joi.string().valid('STUDENT', 'TEACHER').uppercase().required();