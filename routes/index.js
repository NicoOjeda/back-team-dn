let router = require('express').Router()



let hotel = require('./hotel')



router.use('/api/hotels', hotel)






let userRoute = require('./userRoute')

let cityRoute = require('./cityRoute')

const middlewareTime = (req,res, next) => {
    console.log('Time:', Date.now()) // Imprime por consola cada vez q sale una peticion
    next()
  }
const bodyUser = (req, res, next) => {
    if(req.body.name.length > 3) {
    next()
}
    else {
         throw new Error('El nombre es muy corto')
    }
}
// router.use('/user', middlewareTime, bodyUser, userRoute)
// router.use('/api/users', userRoute)
router.use('/cities', middlewareTime, cityRoute)
router.use('/user', userRoute)



module.exports = router;
  