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

    login:(req, res)=>{
        res.render('login')
    },

    cadastro:(req, res)=>{
        res.render('cadastro')
    },

    adminLogin:(req,res)=>{
        const users = database.users
        const {email, password, isAdmin} = req.body

        const userFound = users.find((user) => user.email === email);
        
        if(!userFound){
            console.log('e-mail ou senha invalida')
            return
        }

        const isValidPassword = userFound.password === password

        if(!isValidPassword){
            console.log('E-mail ou senha invalido')
            return
        }

        if(!userFound.isAdmin){
            
        }
 
    }
}


module.exports = HomeController;