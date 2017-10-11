'use strict';

const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/authenticate');
const validate_token = require('../controllers/validatetoken');

router.post('/authenticate', auth_controller);
router.get('/validatetoken', validate_token);

module.exports = router;