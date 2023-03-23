const {randomUUID} = require('crypto')
const productModel = require('../database/productsModel');
const usersModel = require('../database/usersModel');

const { Product } = require('../models');

const AdminController = {

    showCadastroProduto:(req, res)=>{
        res.render('admin/cadastroProduto')
    },

    showLogin:(req, res)=>{
        res.render('admin/login')
    },

    showProdutos: async (req, res)=>{
    
        const products = await Product.findAll();

   
        res.render('admin/produtos', {products});

    },

    showHome: (req,res)=>{
        res.render('admin/home')
    },

    showEditarProduto: async (req,res)=>{
        const {id} = req.params

        const productFound = await Product.findOne({
            where: {
                id: id
            }
        })

        return res.render('admin/editar', { product: productFound});

    },

    cadastroProduto: (req, res)=>{
        

        const {name, price, active, stock, description} = req.body
      
        const image = `/images/${req.file.filename}`

        const newProduct = {

            id: randomUUID(),
            name,
            price,
            image,
            active: active === "on"? true : false,
            stock: stock === "on"? true : false,
            description
        }
         
        Product.create(newProduct);
        
        res.redirect('/admin/produtos') 
        
    },

    updateProduto:(req, res)=>{
        
        const { name, price, active, image, stock, description} = req.body;
        //const image = `/images/${req.file.filename}`
        const {id} = req.params
        

        const editedProduct = {
            id,
            name,
            price,
            image,
            active,
            stock,
            description
        }

        productModel.update(id, editedProduct);

        return res.redirect('/admin/produtos')

    },

    deleteProduto:(req, res)=>{
        const {id} = req.params

        productModel.delete(id)

        return res.redirect('/admin/produtos')

    }

};


module.exports = AdminController;


    

    