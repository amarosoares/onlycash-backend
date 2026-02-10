const express = require('express');
const router = express.Router();
const contentController = require('./contentController'); // corrigido

router.get('/', contentController.getAllContent);
router.post('/create', contentController.createContent);

module.exports = router;
