let router = require('express').Router();
let { create ,read, update,destroy} = require('../controllers/cityController')


router.post('/', create );
router.route('/read').get(read);
router.put('/:id', update);
router.get('/readCities', read);
router.delete('/destroy/:id',destroy);


  
module.exports = router;


 



