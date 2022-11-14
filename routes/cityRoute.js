let router = require('express').Router();
let { create ,read, update,destroy,readOne} = require('../controllers/cityController')


router.post('/', create );
router.put('/:id', update);
router.get('/', read);
router.delete('/destroy/:id',destroy);
router.get('/:id', readOne);

  
module.exports = router;


 



