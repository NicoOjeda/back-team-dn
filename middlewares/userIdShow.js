const {idnotauthorized} = require("../config/responses")
let Show = require('../models/Show')

const showIdExists =  async(req,res,next) => {
    let show = await Show.findOne({_id: req.params.id})

    if(show?.userId.equals(req.user.id)){
      
        return next()
    } else{
        return idnotauthorized(req, res)
    }
}

module.exports = showIdExists