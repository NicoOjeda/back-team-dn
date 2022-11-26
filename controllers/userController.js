const User = require("../models/User");
const bcryptjs = require("bcryptjs"); //d esta libreria vamos a utilizar el metodo hashSync para encriptar la contraseña
const crypto = require("crypto"); //d este modulo vamos a requerir el metodo randomBytes
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse, userNotFoundResponse } = require("../config/responses");
const jwt = require('jsonwebtoken')
const {invalidCredentialsResponse} = require('../config/responses')

const createdUser = {
  signup: async (req, res,next) => {
    let { name, lastName, photo, age, email, password } = req.body;

    let role = "user";

    let verified = false;
    let logged = false;
    let code = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 10); //aca el 10 es el grado de seguridad.tarda menos al ser 10.dentro de todo weno y se encripta rapido.
    //encrypto o hasheo la password
    // metodo para crear usser =  create (metodo de mongoose)
    try {
      await User.create({
        name,
        lastName,
        role,
        photo,
        age,
        email,
        password,
        verified,
        code,
        logged
      });
      console.log(res.body)
      //envia mail de verificacion (con transportador)
      await accountVerificationEmail(email, code);
      return userSignedUpResponse(req, res);
    } catch (error) {
        console.log(error)
      next(error);
    }


  },
  verified: async (req,res,next) => {
    const { code } = req.params
    try{

      let user = await User.findOneAndUpdate(
        { code: code },
        { verified: true },
        { new: true }
      )
        if (user) {
          return res.redirect('http://localhost:3000/signin')


        }
        return userNotFoundResponse(req,res)
    }catch (error){
      next(error)
    }
  },

  signin: async (req,res,next)=>{
    const {password} = req.body;
    const {user} = req;
console.log(password);
// console.log(user);
    try{
      const passwordVerify = bcryptjs.compareSync(password,user.password)

      if (passwordVerify){
        await User.findOneAndUpdate({_id : user.id},{online: true}, {new: true})
        const token = jwt.sign(
          {id:user._id, name: user.name, photo: user.photo, online: user.online},
          process.env.KEY_JWT,
          {expiresIn: 60 * 60 * 24}
        )
          return res.status(200).json({
            response: {user, token},
            success: true,
            message: 'Welcome ' + user.name
          })
      }
      return invalidCredentialsResponse(req,res)
    } catch(error){
      next(error)
    }
  },
  logInToken:  async (req,res,next)=>{

    let {user} = req
    try{  
      return res.json({
        response: {
          user:{
            name : user.name,
            photo: user.photo
          },
        },
        success: true,
        message: 'welcome ' + user.name
      })
    } catch(error){
      next(error)
    }

  }














};
module.exports = createdUser;
