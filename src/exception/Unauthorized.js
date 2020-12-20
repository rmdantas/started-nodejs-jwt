module.exports = class Unauthorized extends Error {
    constructor(message) {
        super(message || 'Unauthorized');
        this.name = this.constructor.name;
        this.status = 401;
    }
}
