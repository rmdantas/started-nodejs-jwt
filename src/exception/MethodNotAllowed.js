module.exports = class MethodNotAllowed extends Error {
    constructor() {
        super('Method Not Allowed');
        this.name = this.constructor.name;
        this.status = 405;
    }
}
