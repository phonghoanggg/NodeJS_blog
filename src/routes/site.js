const express = require('express');
const router = express.Router();
const siteControllers = require('../app/controllers/SiteControllers');

router.use('/connet', siteControllers.connet);

// Màn hình SEARCH
router.use('/search', siteControllers.search);
// Màn hình chính HOME
router.use('/', siteControllers.index);

module.exports = router;
