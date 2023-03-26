const database = require('../database/users.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "users.json");
const crypto = require('crypto')

const User = {

    findAll: ()=>{
        return database.users;
    },

    findOne: (email) => {
        const user = database.users.find(user => user.email === email);

        return user;
    },

    verifyPassword: (senha) => {
        const psw = database.users.find(psw => psw.password === senha)

        return psw;
    },

    create: (user) => {
        const newUsuario = {
            id: user.id =  crypto.randomUUID(),
            name: user.name,
            tel: user.tel,
            email: user.email,
            password: user.psw,
            publicplace: user.publicplace,
            number: user.number,
            neighborhood: user.neighborhood,
            reference: user.reference,
            zipcode: user.zipcode,
            isAdmin: false
        };

        database.users.push(newUsuario);
        const dbJson = JSON.stringify(database, null, 4);
        fs.writeFileSync(pathDb, dbJson, "utf-8")
    }, 

}

module.exports = User; 