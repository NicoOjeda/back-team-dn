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
    let { query } = req;

    if (req.query.citiId) {
      query = { citiId: req.query.citiId };
      console.log(req.query);
    }
    if (req.query.userId) {
      query = { ...query, userId: req.query.userId };
    }

    try {
      let itineraries = await Itinerary.find(query)
        .populate("userId", ["name", "photo"])
        .populate("citiId", ["name", "photo"]);

      res.status(200).json({
        response: itineraries,
        success: true,
        message: "all itineraries finded",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "No Found ",
      });
    }
  },
  readOne: async (req, res, next) => {
    let { query } = req;
    let order = {};
    console.log(req.query);

    if (req.query.citiId) {
      query = { citiId: req.query.citiId };
      console.log(req.query);
    }
    if (req.query.Itinerary) {
      query = {
        ...query,
        Itinerary: req.query.Itinerary,
      };
    }
    if (req.query.name) {
      query = {
        ...query,
        name: req.query.name,
      };
    }
    if (req.query.order) {
      order = { name: req.query.order };
    }

    try {
      let todos = await citiId
        .find(query)
        .sort(order)
        .populate({ path: "name", populate: "photo" });
      if (todos) {
        res.status(200).json({
          response: todos,
          success: true,
          message: "Encontrado",
        });
      } else {
        res.status(404).json({
          response:[],
          success: false,
          message: "No Found",
        });
      }
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res) => {
    let { id } = req.params;

    try {
      console.log(req.params.id, req.body);
      let itineraryUpdate = await Itinerary.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
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
  destroy: async (req, res) => {
    let { id } = req.params;
    try {
      let itUp = await Itinerary.findOneAndDelete({ _id: id });
      if (itUp) {
        res.status(200).json({
          success: true,
          messagge: "the city was successfully removed.",
        });
      } else {
        res.status(404).json({
          success: false,
          messagge: "the city no found",
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = createItinerary;
