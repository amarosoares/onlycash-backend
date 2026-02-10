const express = require('express');
const router = express.Router();
const contentController = require('./contentController');

router.get('/', contentController.getAllContent);
router.post('/', contentController.createContent);

module.exports = router;
