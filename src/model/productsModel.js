const database = require('../database/db.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const productsModel = {
    findAll: () => {
        return database.products;
    }, 

    findByPk: (id) => {
        const product = database.products.find(product => product.id === id)
        return product;
    },

    create: (product) => {
        database.products.push(product);

        const dbjson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbjson, "utf-8")
    },

    upDate: (id, product) => {

    },

    delete: (id) => {

    }
};


module.exports = productsModel;


