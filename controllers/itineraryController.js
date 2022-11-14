const Itinerary = require("../models/Itinerary");
const createItinerary = {

  create: async (req, res) => {
    try {
      let new_it = await (await Itinerary.create(req.body)).save();
      res.status(201).json({
        id: new_it,
        success: true,
        message: "successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  read: async (req, res) => {
    const {id} = req.params
    try {
      let itinerary = Itinerary.findOneAnd({_id:id})
      if (itinerary) {
        res.status(200).json({
          response: itinerary,
          success: true,
          messagge: "itinerary found successfully ",
        });
      }else{
        res.status(404).json({
          success: false,
          messagge: "could´t find eitinerary"
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        messagge: "error"
      });
    }
  },

  update: async (req, res) => {
    let { id } = req.params;
  
    try {
      let itineraryUpdate = await Itinerary.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      if (itineraryUpdate) {
        res.status(200).json({
          id: itineraryUpdate,
          success: true,
          message: " itineraries successfully update",
        });
      } else {
        res.status(404).json({
          success: false,
          message: "itineraries no Found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  destroy: async(req, res) => {
    let { id } = req.params
    try {
      let itUp = await Itinerary.findOneAndDelete({ _id: id })
  
      if (itUp) {
  
        res.status(200).json({
          id: itUp._id,
          success: true,
          messagge: "the city was successfully removed."
        })
      } else {
        res.status(404).json({
          success: false,
          messagge: "the city no found"
        })
      }
    } catch(error){
      res.status(400).json({
        success: false,
        message: error.message
  
      }
  
  
  
      )
    }
  },
  
}


  module.exports = createItinerary;
