module.exports = class MethodNotAllowedException extends Error {
    constructor() {
        super('Method Not Allowed');
        this.name = this.constructor.name;
        this.status = 405;
    }
}
