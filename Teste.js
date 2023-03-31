
const Usuario = require('./src/models/Usuario')

Usuario.findAll().then(function(resultado){
    console.log(resultado)
})