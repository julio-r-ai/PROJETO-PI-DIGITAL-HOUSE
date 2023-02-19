const fs = require('fs')
const path = require('path')




const getInfoModel = (filename)=>{

    const filePath = path.join(__dirname, '..', 'model', `${filename}.json`);

    const readFromFile = fs.readFileSync(filePath,"utf-8");
    console.log(readFromFile);
    return JSON.parse(readFromFile)

}

module.exports = getInfoModel;