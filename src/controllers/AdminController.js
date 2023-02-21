const database = require('../database/db.json');

const AdminController = {

    showLogin:(req, res)=>{
        res.render('admin/login')
    },

    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
    },
    showAdmin:(req, res)=>{
        res.render('telaAdministrador')
    },

}
module.exports = AdminController;