const database = require('../database/products.json');
const fs = require('fs');
const path = require('path');
const pathDb = path.resolve("src", "database", "products.json");

const productsModel = {


    findAll: () => {
        return database.products;
    }, 

    findByPk: (id) => {

        const product = database.products.find(product => product.id === id);
        return product;

    },

    create: (product) => {
        database.products.push(product);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf-8")
    }, 

    update: (id, product) => {
        const indexProduct = database.products.findIndex(product => product.id === id)
        database.products[indexProduct] = product;
        

        const dbJson = JSON.stringify(database, null, 4);
        fs.writeFileSync(pathDb, dbJson)

        return;
    },

    delete: (id) => {
        const indexProduct = database.products.findIndex(product => product.id === id)

        database.products.splice(indexProduct, 1)

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf-8")
    }
}; 


module.exports = productsModel;


