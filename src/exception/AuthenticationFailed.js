const Unauthorized = require('./Unauthorized');

module.exports = class AuthenticationFailed extends Unauthorized {
    constructor() {
        super('Failed to authenticate');
    }
}
