const database = require('../database/db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");
const crypto = require('crypto')

const User = {

    findAll: ()=>{
        return database.users;
    },

    findOne: (email) => {
        const user = database.users.find(user => user.email === email);

        return user;
    },

    create: (user) => {
        const newUsuario = {
            id: user.id =  crypto.randomUUID(),
            name: user.name,
            tel: user.tel,
            email: user.email,
            cpf: user.cpf,
            password: user.password,
            termo: user.termo
        };

        database.users.push(newUsuario);
        const dbJson = JSON.stringify(database, null, 4);
        fs.writeFileSync(pathDb, dbJson, "utf-8")
    }, 

}

module.exports = User; 