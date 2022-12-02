const Comment = require('../models/Comment')

const controller = {

    create: async (req,res)=>{
        let userId = req.user.id
        let {showId, date,  comment}= req.body

        try {
            let newComment = await Comment.create({showId, userId, comment, date})
            res.status(200).json( {
                response: newComment,
                success: true,
                message: "new comment create"
            })
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
    }
},

    read: async (req,res)=>{
        let query = {}
        let order={}

        if(req.query.showId){
            query = {showId :req.query.showId}
        }
        if (req.query.order){
            order = {date : req.query.order}
        }
        try{
            let commentShow = await Comment.find(query).sort({date: "desc"})
            .populate('userId', ['name', 'photo'])
            if(commentShow){
            res.status(200).json( {
                response: commentShow,
                success: true,
                message: "all comments found"
            })
            } else {
                    res.status(404).json({
                    response: [],
                    success: false,
                    message: "comment not found"
            })
            }
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        } 
    
    }


}

module.exports = controller