const {idnotauthorized} = require("../config/responses")
let Comment = require('../models/Comment')

const CommentIdExists =  async(req,res,next) => {
    let comment = await Comment.findOne({_id: req.params.id})
    console.log(comment);
    if(comment?.userId.equals(req.user.id)){

        return next()
    } else{
        return idnotauthorized(req, res)
    }
}

module.exports = CommentIdExists