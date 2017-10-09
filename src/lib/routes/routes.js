'use strict';

const express = require('express');
const router = express.Router();
const auth_controller = require('../controllers/authenticate');

router.post('/authenticate', auth_controller);

module.exports = router;