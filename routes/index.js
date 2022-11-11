let router = require('express').Router()

let hotel = require('./hotel')



router.use('/api/hotels', hotel)








module.exports = router;
