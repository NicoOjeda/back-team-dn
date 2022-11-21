const joi = require("joi");

// const validator = require('./validator')esto va en la ruta
const schema = joi.object({
  name: joi.string().required().min(3).max(50),
  photo: joi.string().required().uri(),
  continent: joi.string().required().messages({
    "any.require": "El campo es requerido, por favor ingresalo",
    "string.empty": "no pusiste nada en el campo cityId",
    "string.min": "minimo tiene q tener 3 letras",
    "string.max": "maximo tiene q tener 23 letras",
  }),
  population: joi.number().required().min(4).max(50).messages({
    "any.require": "El campo es requerido, por favor ingresalo",
    "string.empty": "no pusiste nada en el campo nombre",
    "string.min": "minimo tiene q tener 4 numeros",
    "string.max": "maximo tiene q tener 8 numeros",
    "string.base": "ingresa numero por favor",
  }),
  userId: joi.string().required().messages({
    "any.require": "El campo es requerido, por favor ingresalo",
    "string.empty": "no pusiste nada en el campo userId",
    "string.min": "minimo tiene q tener 3 letras",
    "string.max": "maximo tiene q tener 23 letras",
  }),
});

module.exports = schema;
