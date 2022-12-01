let router = require('express').Router()
const schema = require('../schemas/hotel')
const validator = require('../middlewares/validator')
const passport = require('../config/passport')
const hotelUIdExists = require('../middlewares/userIdExist')


let {create, read, update, destroy, all} = require('../controllers/hotel') 


router.post('/',validator(schema), create) 
router.get('/', all)
router.get('/:id', read)
router.patch('/:id',passport.authenticate('jwt',{session:false}), hotelUIdExists, update)
router.delete('/:id',passport.authenticate('jwt',{session:false}), hotelUIdExists, destroy)

module.exports = router;