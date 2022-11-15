let router = require('express').Router();
const { create, read , update, destroy, readOne  } = require('../controllers/itineraryController')


router.post('/', create );
router.get('/',read);
router.put('/:id',update);
router.delete('/:id', destroy)
// router.get('/:id', readOne) 

// router.get('/?cityId=id',readOne);
module.exports = router;