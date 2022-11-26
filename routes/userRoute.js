

const router = require('express').Router();
const validator = require('../middlewares/validator')
const { signup , verified } = require('../controllers/userController')
const accountExists = require("../middlewares/accountExistsSignUp");
const { verifiedaccess } = require('googleapis/build/src/apis/verifiedaccess');
const schema = require("../schemas/user")
// const { accountExist, accountExists } = require('../middlewares/accountExistsSignUp')
//primero valido con joi
// luego verifico si la cuenta existe
// y si todo va bien, creo el usuario
router.post('/signup',validator(schema),accountExists, signup)
router.get('/verify/:code',verified )

// validator(schema),accountExists,
module.exports = router


     