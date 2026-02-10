const express = require('express');
const router = express.Router();
const subscriptionController = require('./subscriptionController'); // corrigido

router.post('/subscribe', subscriptionController.subscribeUser);
router.get('/subscriptions/:creatorId', subscriptionController.getSubscriptions);

module.exports = router;
