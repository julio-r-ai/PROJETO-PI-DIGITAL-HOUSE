const database = require('../database/db.json');

const usersModel = {

    users: () => {
        return database.users;
    }

}

module.exports = usersModel; 