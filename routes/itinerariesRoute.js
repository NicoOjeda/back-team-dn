let router = require('express').Router();
const { create, read , update, destroy  } = require('../controllers/itineraryController')


router.post('/', create );
router.route('/read').get(read);
router.put('/:id',update);
router.delete('/:id', destroy)
  
module.exports = router;