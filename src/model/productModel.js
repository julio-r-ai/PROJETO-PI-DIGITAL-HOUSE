const database = require('../database/db.json');
const fs = require('fs');
const path  = require('path');
const pathDb = path.resolve("src", "database", "db.json");

const productModel = {
    findAll: () => {
        return database.products;
    },

    create: (product) => {
        database.products.push(product);

        const dbJson = JSON.stringify(database);
        fs.writeFileSync(pathDb, dbJson, "utf8");  
    }
 }


module.exports = productModel;