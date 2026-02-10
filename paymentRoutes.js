const express = require('express');
const router = express.Router();
const paymentController = require('./paymentController');

router.post('/pay', paymentController.makePayment);
router.get('/history', paymentController.getPayments);

module.exports = router;
