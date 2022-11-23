const joi = require('joi')

const schema = joi.object({
    name : joi.string().min(4).max(50).required().messages({"string.empty" : "name is required"}),
    photo : joi.string().uri().required().messages({"string.empty" : "photo is required", "string.uri" : "photo must be a valid uri"}),
    capacity :joi.number().min(100).required().messages({"number.base" : "Number is required"}),
    citiId : joi.string().required().messages({"string.empty" : "citiId is required"}),
    userId : joi.string().required().messages({"string.empty" : "userId is required"}),
})

module.exports = schema