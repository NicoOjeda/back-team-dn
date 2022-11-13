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

    update: async(req,res) => {
    let {id} = req.params

    try {
      let cityUpdate = await City.findOneAndUpdate({_id: id}, req.body, {new: true})
      if(cityUpdate){
        res.status(200).json({
          id: cityUpdate,
          success: true,
          message: "successfully update"  
        })
      }else{
        res.status(404).json({
          success:false,
          message: "City no Found"
        })
      }

    }catch(error){
      res.status(400).json({
        success: false,
        message: error.message

    }



   )}
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
