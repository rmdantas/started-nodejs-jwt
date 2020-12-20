const Unauthorized = require('../exception/Unauthorized');

module.exports = class TokenNotProvided extends Unauthorized {
    constructor() {
        super('No token provided');
    }
}
