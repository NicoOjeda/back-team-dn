const City = require('../models/City')


const cityCreated = {
  create: async (req, res) => {
    try {
      let new_city = await City.create(req.body)
      res.status(201).json({
        id: new_city,
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
  read: async (req, res) => {
    let query = {}
    let order = {}

    if(req.query.name){
        query = {name:  {  $regex : req.query.name }}
    }
    if(req.query.order){
        order = { name:  req.query.order}
    }
    try{
        let cities = await City.find(query).sort(order)
        res.status(200).json( {
            response: cities,
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





  update: async (req, res) => {
    let { id } = req.params

    try {
      let cityUpdate = await City.findOneAndUpdate({ _id: id }, req.body, { new: true })
      if (cityUpdate) {
        res.status(200).json({
          id: cityUpdate,
          success: true,
          message: "successfully update"
        })
      } else {
        res.status(404).json({
          success: false,
          message: "City no Found"
        })
      }

    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message

      }



      )
    }
  },

  destroy: async(req, res) => {
    let { id } = req.params
    try {
      let one = await City.findOneAndDelete({ _id: id })

      if (one) {

        res.status(200).json({
          id: one._id,
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

module.exports = cityCreated


// Como admin de la app
// Quiero editar una ciudad
// Para actualizar los datos de la ciudad

// Crear ruta/controlador para editar una ciudad
//     método: put
//     ruta: /api/cities/:id
//     realizar pruebas con postman
