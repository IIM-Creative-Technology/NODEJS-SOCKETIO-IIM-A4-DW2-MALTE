const express = require('express')
const router = express.Router()
const MainController = require('../controllers/main');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

const userAPI = require('./user');
const documentAPI = require('./document');

router.get('/', MainController.index);
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

userAPI.createRoutes(router);
documentAPI.createRoutes(router);

module.exports = router;
