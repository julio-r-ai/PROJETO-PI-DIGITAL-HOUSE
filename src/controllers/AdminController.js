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
        const users = database.users
        const {email, password} = req.body

        const userFound = users.find((user)=> user.email === email)

        if(!userFound){

            console.log('Usuário não existe')
            return 

        }

        const isValidPassword = userFound.password === password
        if(!isValidPassword){

            console.log('Email ou senha inválida')
            return
        }
        if(!userFound.isAdmin){
            return res.redirect('/')
        }
        return res.redirect('/admin/home')
    }


    };

    module.exports = AdminController;


    