let router = require('express').Router();
const passport = require('passport');
let { create ,read, update,destroy,readOne,} = require('../controllers/cityController')
const schema = require ('../schemas/city')
const validator = require('../middlewares/validator')
const usernotauthorized = require('../middlewares/cityAuth')
const {readMyCities} = require('../controllers/Mycities')


router.post('/',validator(schema) ,create );
router.patch('/:id',passport.authenticate('jwt',{session:false}), usernotauthorized,update);
router.get('/', read);
router.delete('/:id',passport.authenticate('jwt',{session:false}),usernotauthorized , destroy);
router.get('/:id', readOne,readMyCities);

  
module.exports = router;


 



