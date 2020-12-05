require('dotenv-safe').config();

const app = require('./src/app')
const http = require('http');
const port = process.env.PORT;

http.createServer(app).listen(port, () => {
    console.log(`Service started and listening to the door ${port}`);
});
