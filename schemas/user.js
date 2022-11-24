const joi = require('joi')

const schema = joi.object({
    name : joi.string().min(4).max(50).required().messages({"string.empty" : "name is required"}),

    lastName: joi.string().min(4).required().messages({"string.empty" : "name is required"}),

    photo : joi.string().uri().required().messages({"string.empty" : "photo is required", "string.uri" : "photo must be a valid uri"}),
    
    age:joi.number().min(100).required().messages({"number.base" : "Number is required"}),

    email:joi.string().uri().required(),

    password:joi.string().uri().required(),

  
})
   
const User = mongoose.model('user', schema) 
module.exports = schema