const Itinerary = require('../models/Itinerary')

const createItinerary = {
  create: async (req, res) => {
    try {
      let new_it = await Itinerary.create(req.body)
      res.status(201).json({
        id: new_it,
        success: true,
        message: "successfully created"
      })
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message
      })
    }
  },
}

module.exports = createItinerary


