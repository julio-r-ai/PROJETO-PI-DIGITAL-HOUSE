const database = require('../database/db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const usersModel = {

    findAll: () => {
        return database.users;
    },

    create: (user) => {
        database.users.push(user);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf-8")
    }, 

}

module.exports = usersModel; 