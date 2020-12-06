const express = require('express');
const router = express.Router();

router.all('/', (req, res, next) => {
    res.status(204);
    next();
});

module.exports = router;