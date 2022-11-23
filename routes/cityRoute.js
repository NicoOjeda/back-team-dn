let router = require('express').Router();
let { create ,read, update,destroy,readOne} = require('../controllers/cityController')
const schema = require ('../schemas/city')
const validator = require('../middlewares/validator')



router.post('/',validator(schema) ,create );
router.patch('/:id', update);
router.get('/', read);
router.delete('/:id',destroy);
router.get('/:id', readOne);

  
module.exports = router;


 



