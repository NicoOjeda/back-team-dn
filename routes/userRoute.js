

let router = require('express').Router();

let { create } = require('../controllers/userController');




router.post('/', create );


module.exports = router;
