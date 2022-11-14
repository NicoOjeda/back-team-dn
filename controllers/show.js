const Show = require('../models/Show')
const controller = require('./hotel')

const controllerShow = {
    create : async (req,res) =>{


        try{
            let new_show = await Show.create(req.body)
            res.status(201).json({
                id: new_show._id,
                success: true,
                message: "show created"
            })
        } catch(error){
            res.status(400).json({
                success: false,
                message: error.message
        })
    }
},
    update : async(req,res)=>{
        
        let { id } = req.params

        try{
            let oneU = await Show.findOneAndUpdate({_id:id}, req.body, {new: true})
            if(oneU){
                res.status(200).json({
                    id: oneU._id,
                    success: true,
                    message: "show modified"
    
                })
            } else {
                res.status(404).json({
                    success: true,
                    message: "show not finded"
                })
            }
        }catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }

    },
    destroy : async(req,res)=>{
        
        let { id } = req.params

        try{
            let oneD = await Show.findOneAndDelete({_id:id})
            if(oneD){
                res.status(200).json({
                    id: oneD._id,
                    success: true,
                    message: "show deleted"
                })
            } else {
                res.status(404).json({
                    success: true,
                    message: "show not finded"
                })
            }
        }catch (error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }

    }
}

module.exports = controllerShow