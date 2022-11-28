const router = require('express').Router();
const validator = require('../middlewares/validator');
const { signup , verified, signin, logInToken, readUser, updateUser, signout } = require('../controllers/userController');
// const accountExists = require("../middlewares/accountExistsSignUp");
// const { verifiedaccess } = require('googleapis/build/src/apis/verifiedaccess');
const schema = require("../schemas/user");
const {accountExists} = require('../middlewares/accountExistsSignIn')
const {accountHasBeenVerified} = require ('../middlewares/accountHasBeenVerified');
const passport = require('../config/passport');
const signInSchema = require('../schemas/signin')
const mustSignIn = require('../middlewares/mustSignIn')


// const { accountExist, accountExists } = require('../middlewares/accountExistsSignUp')
//primero valido con joi
// luego verifico si la cuenta existe
// y si todo va bien, creo el usuario
router.post('/signup',validator(schema), signup)
router.get('/verify/:code',verified )
router.post('/signin',validator(signInSchema), accountExists, accountHasBeenVerified, signin )
router.post('/token', passport.authenticate('jwt',{session:false}), mustSignIn, logInToken )
router.get('/me/:id', readUser)
router.patch('/me/:id', updateUser)
router.put("/sign-out",passport.authenticate('jwt',{session:false}), signout )

// validator(schema),accountExists,
module.exports = router


     