const User = require("../models/User");
const bcryptjs = require("bcryptjs"); //d esta libreria vamos a utilizar el metodo hashSync para encriptar la contraseña
const crypto = require("crypto"); //d este modulo vamos a requerir el metodo randomBytes
const accountVerificationEmail = require("./accountVerificationEmail");
const { userSignedUpResponse, userNotFoundResponse } = require("../config/responses");
const createdUser = {
  signup: async (req, res,next) => {
    let { name, lastName, role, photo, age, email, password } = req.body;
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
        { codigo: code },
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















};
module.exports = createdUser;
