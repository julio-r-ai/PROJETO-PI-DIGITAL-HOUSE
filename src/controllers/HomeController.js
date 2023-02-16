const database = require('../database/db.json');

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

    showLogin:(req, res)=>{
        res.render('login')
    },

    cadastro:(req, res)=>{
        res.render('cadastro')
    },

    admin:(req, res)=>{
        res.render('admin')
    },

    login:(req, res)=>{

        const users = database.users
        const {email, password} = req.body
        
        const usersFound = users.find((user)=>user.email === email)
        if(!usersFound){
            console.log('E-mail ou senha nao existe')
            return
        }

        const isValidPassword = usersFound.password === password
        if(!isValidPassword){
            console.log('E-mail ou senha nao existe')
        }

        if(!usersFound.isAdmin){
            return res.redirect('/admin')
        }

    }
    
}


module.exports = HomeController;