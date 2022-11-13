let router = require('express').Router();
let { create } = require('../controllers/itineraryController')


router.post('/', create );



  
module.exports = router;