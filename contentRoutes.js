const express = require('express');
const router = express.Router();
const contentController = require('./contentController');

router.get('/all', contentController.getAllContent);
router.post('/create', contentController.createContent);

module.exports = router;
