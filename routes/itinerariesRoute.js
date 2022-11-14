let router = require('express').Router();
const { create, read , update } = require('../controllers/itineraryController')


router.post('/', create );
router.route('/read').get(read);
router.put('/:id',update);
// router.put('/:id', update);

  
module.exports = router;