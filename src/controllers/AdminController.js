const database = require('../database/db.json');

const AdminController = {

    showLogin:(req, res)=>{
        res.render('admin/auth/login')
    },

    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
    },
    showAdmin:(req, res)=>{
        res.render('admin/telaAdministrador')
    },


    }

    module.exports = AdminController;


    