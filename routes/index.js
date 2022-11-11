let router = require('express').Router()


let hotel = require('./hotel')



router.use('/api/hotels', hotel)





let userRoute = require('./userRoute')



router.use('/api', userRoute)



module.exports = router;
