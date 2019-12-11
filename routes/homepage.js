const express = require('express');
const router = express.Router();

const homepageController = require('../controllers/homepage');

/* GET homepage. */
router.get('/', homepageController.getHomepage);

module.exports = router;
