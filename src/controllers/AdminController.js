const database = require('../database/db.json');

const AdminController = {

    showLogin:(req, res)=>{
        res.render('admin/login')
    },

<<<<<<< HEAD
    showCadastro:(req, res)=>{
        res.render('admin/cadastro')
=======
    showAdmin:(req, res)=>{
        res.render('telaAdministrador')
>>>>>>> origin
    },


    login:(req,res)=>{ // Validando usuario admin ou usuario normal
        const users = database.users
        console.log(req.body)

        /* const userFound = users.find((user) => user.email === email)

        if(!userFound){
            console.log('Usuario nao encontrado')
            return
        }

        const isValidPassword = userFound.password === password

        if(!isValidPassword){
            console.log('Email ou senha invalida')
        }

        if(!userFound.isAdmin){
            return res.redirect('/');
        }

        return res.redirect('teleAdministrador') */
    }
}

module.exports = AdminController;