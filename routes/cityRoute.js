let router = require('express').Router();
let { create } = require('../controllers/cityController')


router.post('/', create );



  
module.exports = router;


 



