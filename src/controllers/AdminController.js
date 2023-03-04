const database = require('../database/db.json');
const {randomUUID} = require('crypto')

const AdminController = {

    showCadastroProduto:(req, res)=>{
        res.render('admin/cadastroProduto')
    },

    showLogin:(req, res)=>{
        res.render('admin/login')
    },

    showProdutos: (req, res)=>{
        const products = database.products;
       
        res.render('admin/produtos', {products})
    },

    showHome: (req,res)=>{
        res.render('admin/home')
    },

    showEditarProduto:(req,res)=>{
        res.render('admin/editar')
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

    },

    cadastroProduto: (req, res)=>{

        const newProduct = {
            id: randomUUID(),
            name: req.body.name,
            price:req.body.price,
            image:req.body.image,
            active:req.body.active,
            stock:req.body.stock,
            description:req.body.description
        }
         
        database.products.push(newProduct)
        
        res.redirect('/admin/produtos')
        
    },

    updateProduto:(req,res)=>{
        res.render('admin/editar')
    }

};

    module.exports = AdminController;


    