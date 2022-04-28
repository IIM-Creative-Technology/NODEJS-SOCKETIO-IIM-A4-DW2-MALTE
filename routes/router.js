const express = require('express')
const router = express.Router()
const MainController = require('../controllers/main');

const userAPI = require('./user');
const documentAPI = require('./document');

router.get('/', MainController.index)

userAPI.createRoutes(router);
documentAPI.createRoutes(router);

module.exports = router;
