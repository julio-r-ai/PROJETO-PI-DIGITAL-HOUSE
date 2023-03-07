const fs = require('fs');
const path = require('path');

const requestLog = (req, res, next)=> {
    const dateHourResquest =  new Date().toLocaleTimeString('pt-BR');
    const br = ('='.repeat(120));

    const logMessage = `O cliente ${req.ip} acessou a rota ${req.method} ${req.url} - ${res.statusCode} em ${dateHourResquest}\n${br}\n`;

    fs.appendFileSync(path.resolve("src", "logs", "requestLog.txt"),
    logMessage);

    return next();
}

module.exports = requestLog;