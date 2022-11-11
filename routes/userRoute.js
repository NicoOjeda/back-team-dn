

var express = require('express');
var router = express.Router();

let { create } = require('../controllers/userController')



router.post('/users', create );

module.exports = router;
