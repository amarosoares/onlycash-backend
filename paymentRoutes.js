const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController'); // corrigido

router.post('/pay', paymentController.makePayment);
router.get('/transactions/:userId', paymentController.getTransactions);

module.exports = router;
