const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    res.status(204);
    next();
});

module.exports = router;