let router = require('express').Router();
let { create , update  } = require('../controllers/cityController')


router.post('/', create );
router.put('/:id', update);


  
module.exports = router;


 



