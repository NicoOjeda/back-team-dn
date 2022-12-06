const Reaction = require("../models/Reactions");

const controller = {
  create: async (req, res) => {
    try {
      let new_reaction = await Reaction.create(req.body);
      res.status(201).json({
        id: new_reaction._id,
        response: new_reaction,
        success: true,
        message: "the reaction was successfully created",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },

  updateReaction: async (req, res) => {
    let query = {};
    let Id = req.user.id;

    if (req.query.itineraryId) {
      query = {
        itineraryId: req.query.itineraryId,
      };
    }
    if (req.query.showId) {
      query = {
        showId: req.query.showId,
      };
    }
    if (req.query.name)
      query = {
        ...query,
        name: req.query.name,
      };
    try {
      let reaction = await Reaction.findOne(query);
      if (reaction) {
        if (reaction.userId.includes(Id)) {
          await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $pull: { userId: Id } },
            { new: true }
          );
          res.status(200).json({
            message: `Event dis${reaction.name}`,
            success: true,
            reactioned: false,
          });
        } else {
          await Reaction.findOneAndUpdate(
            { _id: reaction._id },
            { $push: { userId: Id } },
            { new: true }
          );
          res.status(200).json({
            message: `Event ${reaction.name}`,
            success: true,
            reactioned: true,
          });
        }
      } else {
        res.status(404).json({
          message: "The reaction dont exist in the itinerary",
          success: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: error.message,
        success: false,
      });
    }
  },

  read: async (req, res) => {
    console.log("Read")

    let query = {};

    
    if (req.query.itineraryId) {
      query = { itineraryId: req.query.itineraryId };

    }
      if (req.query.userId) {
        console.log("Si entra al userId")
        query = { ...query, userId: req.query.userId };
      }





    try {     
        console.log("query")   
        console.log(req.query)   
      let reactions = await Reaction.find(query)
        .populate({ path: "userId", select: "name lastName photo" })
        .populate({ path: "itineraryId", select: "name photo _id" });

      if (reactions.length > 0) {
        let reactionsMore = {};
        reactions.forEach(
          (reaction) => (reactionsMore[reaction.name] = reaction.userId.length)
        );

        res.status(200).json({
          reactionsMore,
          data: reactions,
          id: req.query.itineraryId,
          success: true,
          message: `the reactions from to ${req.query.itineraryId}`,
        });
      } else {
        res.status(404).json({
          success: false,
          message: "Couldn't find reactions",
          data: [],
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        data: error,
      });
    }
  },
  destroy: async (req, res) => {
    let { id } = req.params

    try {
        let response = await Reaction.findOneAndUpdate({ _id: id }, { $pull: { userId: req.user.id } }, { new: true })
        res.status(200).json({
            response,
            message: `reaction deleted`,
            success: true,
        })
    } catch (error) {
        res.status(400).json({
            message: error.message,
            success: false
        })
    }
},
};

module.exports = controller;
