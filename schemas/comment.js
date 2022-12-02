const joi = require('joi')

const schema = joi.object({
    showId : joi.string().required().messages({"string.empty" : "citiId is required"}),
    comment: joi.string().min(3).required().messages({"string.empty" : "comment: min 3 characters"}),
    date: joi.date().required()
})

module.exports = schema