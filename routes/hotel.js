let router = require('express').Router()
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')

let {create, read, update, destroy, all} = require('../controllers/hotel') 

router.post('/',validator(schema), create) 
router.get('/', all)
router.get('/:id', read)
router.patch('/:id', update)
router.delete('/:id', destroy)

module.exports = router;