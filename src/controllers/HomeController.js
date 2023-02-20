const database = require('../database/db.json')

const HomeController = {
    home: (req, res) =>{
        return res.render('home')
    },

    bolos: (req, res) =>{
        return res.render('bolos')
    },
    
    contato: (req, res)=>{
        return res.render('contato')
    },

    sobre: (req, res)=>{
        return res.render('sobre')
    },
    carrinho: (req, res)=>{
        return res.render('carrinho')
    },

    login:(req, res)=>{
        res.render('login')
    },

    cadastro:(req, res)=>{
        res.render('cadastro')
    },

    painelUsuario:(req, res)=>{
        res.render('painelUsuario')
    },

    telaAdministrador:(req, res)=>{
        res.render('telaAdministrador')
    },

    descricaoProduto:(req, res)=>{
        res.render('descricaoProduto')
    },

    loginAdmin:(req,res)=>{ // Validando usuario admin ou usuario normal
        const users = database.users
        const {email, password} = req.body

        const userFound = users.find((user) => user.email === email)

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

        return res.redirect('/telaAdministrador')
    }
} 



module.exports = HomeController;