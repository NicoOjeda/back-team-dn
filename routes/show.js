let router = require('express').Router()
const passport = require('../config/passport')

let { create , update , destroy, read } = require('../controllers/show')
const showIdExists = require('../middlewares/userIdShow')


router.post('/', create)
router.patch('/:id',passport.authenticate('jwt',{session:false}),showIdExists, update)
router.delete('/:id',passport.authenticate('jwt',{session:false}),showIdExists, destroy)
router.get('/', read)

module.exports = router
