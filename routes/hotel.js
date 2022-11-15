let router = require('express').Router()

let {create, read, update, destroy, all} = require('../controllers/hotel') 

router.post('/', create) 
router.get('/', all)
router.get('/:id', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;