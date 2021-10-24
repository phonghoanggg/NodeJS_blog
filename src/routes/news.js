const express = require('express');
const router = express.Router();
const newsControllers = require('../app/controllers/NewControllers');

router.use('/tintuc', newsControllers.show);
router.use('/', newsControllers.index);

module.exports = router;
