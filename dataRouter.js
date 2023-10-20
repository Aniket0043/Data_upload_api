const express = require('express');
const uploadController = require('../controllers/uploadController.js');

const router = express.Router();

router.post('/upload', uploadController.handleUpload);

module.exports = router;

