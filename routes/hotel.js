let router = require('express').Router()

let {create, read, update} = require('../controllers/hotel') 

router.post('/', create) 
router.get('/', read) 
router.patch('/:id', update)

module.exports = router;