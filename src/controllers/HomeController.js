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
        res.render('/login')
    },

    cadastro:(req, res)=>{
        res.render('/cadastro')
    },

    painelUsuario:(req, res)=>{
        res.render('painelUsuario')
    },

    telaAdministrador:(req, res)=>{
        res.render('telaAdministrador')
    },


    //Listagem de produtos

    listaProduto: (req,res)=>{
        const products = database.products;
        res.render('listagemProdutos', {products})
    }

} 



module.exports = HomeController;