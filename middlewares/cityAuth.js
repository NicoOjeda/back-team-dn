const {usernotauthorized} = require("../config/responses")

const cityExist = model => [ async(req,res,next) => {
    let city = await  model.findOne({_id: req.params.id})

    if(city?.userId.equals(req.user.id)){
            console.log(city.userId)
            console.log(req.user.id)
        return next()
    } else{
        return usernotauthorized(req, res)
    }
}
]
module.exports = cityExist