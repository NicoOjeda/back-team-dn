const Hotel = require('../models/Hotel')

const controller = {

    create: async (req,res)=>{
        try{
            let new_hotel = await Hotel.create(req.body)
            res.status(201).json( {
                id: new_hotel._id,
                success: true,
                message: "Hotel created"
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
        let order = {}

        if(req.query.name){
            query = {name:  {  $regex : req.query.name }}
        }
        if(req.query.order){
            order = { name:  req.query.order}
        }
        try{
            let all = await Hotel.find(query).sort(order)
            res.status(200).json( {
                response: all,
                success: true,
                message: "all hotels finded"
            })
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        } 
    },
    update: async (req,res)=>{

        let {id} = req.params

        try{
            let one = await Hotel.findOneAndUpdate({_id : id}, req.body ,  {new: true })
            if(one){
                res.status(200).json({
                    id: one._id,
                    success: true,
                    message: "hotel modified"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "hotel not finded"
                })
            }

        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
    destroy: async (req,res)=>{
        let {id} = req.params

        try{
            let one = await Hotel.findOneAndDelete ({_id : id})
            if(one){
                res.status(200).json({
                    id: one._id,
                    success: true,
                    message: "hotel deleted"
                })
            } else{
                res.status(404).json({
                    success: false,
                    message: "hotel not finded"
                })
            }

        } 
        catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
}

module.exports = controller