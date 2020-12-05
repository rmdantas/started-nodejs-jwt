const NotFoundException = require('./exception/NotFoundException');

const express = require('express');
const helmet = require('helmet');
const app = express();

const healthController = require('../src/health/healthController');

app.use(helmet())
app.use(express.json());

app.use((req, res, next) => {
    console.log(`>>> method: ${req.method}, path: ${req.path}`);
    res.status(100);
    next();
});

app.use('/health', healthController);

app.use((req, res, next) => {
    if (res.statusCode == 100) {
        next(new NotFoundException());
    }

    next();
});

app.use((err, req, res, next) => {
    console.log(err);

    res.status(err.status || 500);
    res.data = { error: err.message };

    next();
});

app.use((req, res, next) => {
    console.log(`<<< method: ${req.method}, path: ${req.path}, status: ${res.statusCode}`)
    res.json(res.data);
});

module.exports = app;