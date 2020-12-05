module.exports = class NotFoundException extends Error {
    constructor() {
        super('Not Found');
        this.name = this.constructor.name;
        this.status = 404;
    }
}
