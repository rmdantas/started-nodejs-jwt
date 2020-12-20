const MethodNotAllowed = require('../exception/MethodNotAllowed');

const authService = require('./authService')
const express = require('express');
const router = express.Router();

router.route('/')
    .post(async(req, res, next) => {
        try {
            const token = await authService.authenticate(req);
            res.data = { token }
            res.status(200);
        
        } catch(err) {
            next(err);
        }
        
        next();
    })
    .all((req, res, next) => {
        if (res.statusCode == 100) {
            next(new MethodNotAllowed());
        }
        
        next();
    });

module.exports = router;