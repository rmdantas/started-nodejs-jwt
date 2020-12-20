const Unauthorized = require('./Unauthorized');

module.exports = class CredentialNotProvided extends Unauthorized {
    constructor() {
        super('Credential not provided');
    }
}
