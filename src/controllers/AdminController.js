const {randomUUID} = require('crypto')
const productModel = require('../model/productModel');

const AdminController = {

    showCadastroProduto:(req, res)=>{
        res.render('admin/cadastroProduto')
    },

    showLogin:(req, res)=>{
        res.render('admin/login')
    },

    showProdutos: (req, res)=>{
        const products = productModel.findAll();
       
        res.render('admin/produtos', {products});

    },

    showHome: (req,res)=>{
        res.render('admin/home')
    },

    showEditarProduto:(req,res)=>{

        const {id} = req.params
        const productFound = database.products.find(product => product.id === id)
        return res.render('admin/editar', { product: productFound});

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

        const {name, price, active, stock, description} = req.body

        const image = `/images/${req.file.filename}`

        const newProduct = {

            id: randomUUID(),
            name,
            price,
            image,
            active,
            stock,
            description
        }
         
        productModel.create(newProduct);
        
        res.redirect('/admin/produtos')
        
    },

    updateProduto:(req,res)=>{
        const {name, price, image, active, stock, description} = req.body
        const {id} = req.params

        const   indexProduct = database.products.findIndex(product => product.id === id)

        const editedProduct = {
            id,
            name,
            price,
            image,
            active,
            stock,
            description
        }

        database.products.splice(indexProduct, 1, editedProduct);

        //database.products.push(editedProduct);
        return res.redirect('/admin/produtos')

    },

    deleteProduto:(req, res)=>{
        const {id} = req.params

        const   indexProduct = database.products.findIndex(product => product.id === id)
        
        database.products.splice(indexProduct, 1)


        const editedProduct = {
            id,
            name,
            price,
            image,
            active,
            stock,
            description
        }

        database.products.push(editedProduct)

        return res.redirect('/admin/produtos')



    },

    deleteProduto:(req, res)=>{
        const {id} = req.params

        const   indexProduct = database.products.findIndex(product => product.id === id)

        database.products.splice(indexProduct, 1)

        return res.redirect('/admin/produtos')


    }

};


    module.exports = AdminController;


    