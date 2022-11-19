const User = require('../models/User')

const createdUser = {

    create: async(req,res) => {
        try {

            let new_user = await User.create(req.body)

            res.status(201).json({
                id: new_user._id,
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
        

    readOne: async (req, res,next) => {
        let {query} = req
        let order = {}
        console.log(req.query)
      
        if(req.query.User){
          query = { User:req.query.User }
          console.log(req.query)
        }
        if (req.query.User) {
          query = {
              ...query,
              User: req.query.User
          }
      }
      if (req.query.name) {
        query = {
            ...query,
            name: req.query.name
        }
      }
      if (req.query.order) {
        order = { name: req.query.order }
      }
      
      
      try {
        let todos = await User.find(query)
            .sort(order)
            .populate({ path: 'name', populate: 'photo' })
        if (todos) {
            res.status(200).json({
                response: todos,
                success: true,
                message: "Encontrado"
            })
        } else {
            res.status(404).json({
                success: false,
                message: "No Found"
            })
        }            
      } catch(error) {
        next(error)
      }        
      },
      

      one: async(req,res,next) => { //método para leer/obtener un USUARIO
        let { id } = req.params
        try {
            let all = await User.find({ _id: id })
            if (todos) {
                res.status(200).json({
                    response: all,
                    success: true,
                    message: "se obtuvo un usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no existe el usuario"
                })
            }            
        } catch(error) {
            next(error)
        }        
    },
    
    update: async(req,res,next) => { //método para actualizar un USUARIO
        let { id } = req.params
        try {
            let all1 = await User.findOneAndUpdate({ _id: id }, req.body,{ new: true })
            if (all1) {
                res.status(200).json({
                    success: true,
                    message: "se modificó el usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay usuarios que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    },
    
    destroy: async(req,res,next) => { //método para eliminar un USUARIO
        let { id } = req.params
        try {
            let all2 = await User.findOneAndDelete({ _id: id })
            if (all2) {
                res.status(200).json({
                    success: true,
                    message: "se eliminó el usuario"
                })
            } else {
                res.status(404).json({
                    success: false,
                    message: "no hay usuarios que coincidan"
                })
            }
        } catch(error) {
            next(error)
        }
    }

//       name: {type: String, required: true},
//       lastName: {type: String, required: true},
//       role: {type: String, required: true},
//       photo: {type: String, required: true},
//       age: {type: Number, required: true},
//       email: {type: String, required: true},
//       password:{type: String, required: true},
//       code:{type: String, required: true},
//       verified: {type: Boolean, required: true},
//       logged: {type: Boolean, require 
// })







    
}
module.exports = createdUser