const CredentialNotProvided = require('../exception/CredentialNotProvided');
const InvalidCredential = require('../exception/InvalidCredential');

const jwt = require('../security/jwt');

const authenticate = async(request) => {
    if (!containCredentials(request.body)) {
        throw new CredentialNotProvided();
    }

    const user = await validateCredentials(request.body);

    if (!user) {
        throw new InvalidCredential();
    }

    return jwt.sign(user.id);
}

const containCredentials = (body) => {
    const login = body.login;
    const password = body.password;

    if (!login || !login.trim()) {
        return false;
    }

    if (!password || !password.trim()) {
        return false;
    }

    return true;
}

const validateCredentials = async(body) => {
    const user = await getUser(body.login);

    if (!user) {
        return null;
    }

    if (user.password != body.password) {
        return null;
    }

    return user;
}

const getUser = async(login) => {
    // TODO: Get the user in the database for authentication (body.login)

    if (login == 'admin') {
        return { 
            id: 1,
            login: "admin", 
            password: "admin" 
        }
    }

    return null;
}

module.exports = {
    authenticate
};