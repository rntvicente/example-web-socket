const express = require('express');

const controller = require('../controllers');

const router = express.Router();

router.get('/', controller.login);
router.get('/chat', controller.initialChat);
router.post('/chat', controller.initialChat);

module.exports = router;
