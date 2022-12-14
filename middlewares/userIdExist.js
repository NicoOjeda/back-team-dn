const {idnotauthorized} = require("../config/responses")
let Hotel = require('../models/Hotel')

const hotelUIdExists =  async(req,res,next) => {
    let hotel = await Hotel.findOne({_id: req.params.id})

    if(hotel?.userId.equals(req.user.id)){
      
        return next()
    } else{
        return idnotauthorized(req, res)
    }
}

module.exports = hotelUIdExists