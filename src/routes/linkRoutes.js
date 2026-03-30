const express = require('express');
const router = express.Router();
const linkController = require('../controllers/linkController');

router.post('/shorten', linkController.createShortLink);
router.get('/:code', linkController.redirect);

module.exports = router;
