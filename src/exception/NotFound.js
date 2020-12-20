module.exports = class NotFound extends Error {
    constructor() {
        super('Not Found');
        this.name = this.constructor.name;
        this.status = 404;
    }
}
