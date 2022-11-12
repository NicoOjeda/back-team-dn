const City = require('../models/City')


const cityCreated = {
    create: async(req,res) => {
        try {
            let new_city = await City.create(req.body)
            res.status(201).json({
                id: new_city,
                success: true,
                message: "successfully created"
            })
        } catch(error) {
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    },
} 

module.exports = cityCreated