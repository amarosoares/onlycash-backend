const express = require('express');
const router = express.Router();
const subscriptionController = require('./subscriptionController');

router.post('/create', subscriptionController.createSubscription);
router.get('/all', subscriptionController.getAllSubscriptions);

module.exports = router;
