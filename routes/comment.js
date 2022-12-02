let router = require('express').Router()
// const schema = require('../models/Comment')
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const schema = require('../schemas/comment')

let { create, read } = require('../controllers/comment')


router.get('/', read)
router.post('/',validator(schema), passport.authenticate('jwt',{session:false}),  create)

// passport.authenticate('jwt',{session:false}),
module.exports = router;