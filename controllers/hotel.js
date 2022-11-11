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
    // read: async (req,res)=>{
    //     try{

    //     } catch{
            
    //     }
    // },
    // update: async (req,res)=>{
    //     try{

    //     } catch{
            
    //     }
    // },
    // destroy: async (req,res)=>{
    //     try{

    //     } catch{
            
    //     }
    // },
}

module.exports = controller