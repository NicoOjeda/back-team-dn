const {cityDelete} = require("../config/responses")
let City = require('../models/City')
let passport = require('../config/passport')
const cityDestroy =  async(req,res,next) => {
    let citi = await City.findOne({_id: req.params.id})

    if(citi?.userId.equals(req.user.id)){
        console.log(city.userId)
        console.log(req.user.id)
        return next()
    } else{
        return cityDelete(req, res)
    }
}

module.exports = cityDestroy