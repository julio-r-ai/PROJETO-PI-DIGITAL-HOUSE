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

    cadastroProduto: async (req, res)=>{
        const {name, price, image, active, stock, description} = req.body

        const resultado = await Product.create({

            id: randomUUID(),
            name,
            price,
            image,
            active: active === "on"? true : false,
            stock: stock === "on"? true : false,
            description,
            usuario_id:  randomUUID(),
        });

        res.redirect('/admin/produtos');
    },

    updateProduto: async (req, res)=>{
        const { name, price, image, active, stock, description} = req.body;
        const {id} = req.params;

        const resultado = await Product.update({
            name,
            price,
            image,
            active: active === "on"? true : false,
            stock: stock === "on"? true : false,
            description
        },{
            where:{
                id
            }
        });

        return res.redirect('/admin/produtos')
    },

    deleteProduto: async (req, res)=>{
        const {id} = req.params;
    
        const resultado = await Product.destroy({
            where:{
                id
            }    
        })
        return res.redirect('/admin/produtos')
    }

};

module.exports = AdminController;    