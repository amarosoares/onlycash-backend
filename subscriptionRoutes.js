const express = require('express');
const router = express.Router();
const subscriptionController = require('./subscriptionController');

router.post('/', subscriptionController.createSubscription);

module.exports = router;
