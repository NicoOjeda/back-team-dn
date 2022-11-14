let router = require('express').Router()



let hotel = require('./hotel')
let show = require('./show')




router.use('/hotels', hotel)
router.use('/shows', show)






let userRoute = require('./userRoute')

let cityRoute = require('./cityRoute')
const cityCreated = require('../controllers/cityController')
let itinerariesRoute = require('./itinerariesRoute')

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
router.use('/user', middlewareTime, bodyUser, userRoute)
router.use('/api/users', userRoute)
router.use('/cities', middlewareTime, cityRoute)
router.use('/user', userRoute)
router.use('/itineraries', itinerariesRoute)
// router.use('/id')
// router.use('/City',cityCreated)




module.exports = router;
  