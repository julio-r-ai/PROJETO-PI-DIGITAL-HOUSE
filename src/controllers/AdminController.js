const database = require('../database/db.json');

const AdminController = {

    showLogin:(req, res)=>{
        res.render('admin/auth/login')
    },

    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
    },

    login:(req, res)=>{
        console.log(req.body)
    }
 

}

module.exports = AdminController;