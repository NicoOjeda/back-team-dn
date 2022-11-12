let router = require('express').Router()

let {create, read} = require('../controllers/hotel') 

router.post('/', create) 
router.get('/', read) 

module.exports = router;