require('dotenv-safe').config();

const app = require('./app')
const http = require('http');
const port = process.env.PORT || 8080;

http.createServer(app).listen(port, () => {
    console.log(`Service started and listening to the door ${port}`);
});
