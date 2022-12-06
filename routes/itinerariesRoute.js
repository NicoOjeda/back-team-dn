let router = require('express').Router();
const model = require ('../models/Itinerary')
const passport = require('passport');
const { create, read , update, destroy, readOne  } = require('../controllers/itineraryController')
const cityExist = require('../middlewares/cityAuth') 

router.post('/', create );
router.get('/',read);

router.patch('/:id',passport.authenticate('jwt',{session:false}),cityExist(model),update);
router.delete('/:id',passport.authenticate('jwt',{session:false}),cityExist(model), destroy)
// router.get('/:id', readOne) 

// router.get('/?cityId=id',readOne);
module.exports = router;