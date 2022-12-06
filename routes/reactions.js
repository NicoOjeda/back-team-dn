let router = require('express').Router()
let { create, updateReaction, read , destroy} = require('../controllers/reactions')
let passport = require('../config/passport')
let validator = require('../middlewares/validator')
let schema = require('../schemas/reactions')

router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create)
router.put('/', passport.authenticate("jwt", { session: false }), updateReaction)
router.put('/:id', passport.authenticate("jwt", { session: false }), destroy);

router.get('/', read)

module.exports = router
