const TokenNotProvided = require('../exception/TokenNotProvided');    
const AuthenticationFailed = require('../exception/AuthenticationFailed');

const jwt = require('jsonwebtoken');
const prefixToken = 'Bearer ';

const SECRET = process.env.AUTH_SECRET || 'mysecret';
const EXPIRATION = process.env.AUTH_EXPIRATION || 86400000;

const sign = id => jwt.sign({ id }, SECRET, { expiresIn: EXPIRATION } );

const verify = (request) => {

    const bearerToken = request.headers.authorization;

    if (!bearerToken || bearerToken.indexOf(prefixToken) < 0) {
        throw new TokenNotProvided();
    }

    const token = bearerToken.replace(prefixToken, '');

    try {
        request.user = jwt.verify(token, SECRET); 
    } catch (err) {
        throw new AuthenticationFailed();
    }
}

module.exports = {
    sign,
    verify
}