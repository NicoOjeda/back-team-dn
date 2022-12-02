let router = require('express').Router()
// const schema = require('../models/Comment')
const passport = require('../config/passport')
const validator = require('../middlewares/validator')
const schema = require('../schemas/comment')

let { create, read, update, destroy } = require('../controllers/comment')
const CommentIdExists = require('../middlewares/userIdComment')


router.get('/', read)
router.post('/',validator(schema), passport.authenticate('jwt',{session:false}),  create)
router.put('/:id',validator(schema), passport.authenticate('jwt',{session:false}), CommentIdExists, update)
router.delete('/:id', passport.authenticate('jwt',{session:false}),CommentIdExists, destroy )

// passport.authenticate('jwt',{session:false}),
module.exports = router;