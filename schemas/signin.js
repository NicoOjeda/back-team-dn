const joi = require('joi')

const signInSchema = joi.object({
    email:joi.string().required().messages({
        'any.required': 'MAIL_REQUIRED',
        'string.empty': 'MAIL_REQUIRED',
        'string.email': 'INVALID_MAIL'}),
    password:joi.string().required(),
})

module.exports = signInSchema