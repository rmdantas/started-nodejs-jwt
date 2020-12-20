const Unauthorized = require('./Unauthorized');

module.exports = class InvalidCredential extends Unauthorized {
    constructor() {
        super('Invalid Credential');
    }
}
