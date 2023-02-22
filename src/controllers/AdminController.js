const database = require('../database/db.json');

const AdminController = {

    showLogin:(req, res)=>{
        res.render('admin/login-admin')
    },
    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
    },
    


    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
    },
    showLogin:(req, res)=>{
        res.render('admin/login')
    },
    showAdmin:(req, res)=>{
        res.render('admin/telaAdministrador')
    },
    login: (req, res)=>{
        console.log(req.body)
    }


    };

    module.exports = AdminController;


    