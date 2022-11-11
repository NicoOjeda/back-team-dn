let router = require('express').Router()


let userRoute = require('./userRoute')



router.use('/api', userRoute)


module.exports = router;
