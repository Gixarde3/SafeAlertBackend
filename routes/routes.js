const express = require('express');
const path = require('path');
const router = express.Router();
const Report = require('../controllers/report');

router.post('/report', (req, res) => {
    Report.createReport(req, res);
});

module.exports = router;
