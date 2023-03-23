const productModel = require('../database/productsModel');

const  { Product }  = require('../models') 

const HomeController = {
    home: async (req, res) =>{
        const allProducts = await Product.findAll();
       
        return res.render('home', {allProducts});
    },

    bolos: async (req, res) =>{
        const allProducts = await Product.findAll();
       
        return res.render('home', {allProducts})
    },
    
    contato: (req, res)=>{
        return res.render('contato')
    },

    sobre: (req, res)=>{
        return res.render('sobre')
    },

    seusPedidos: async (req, res)=>{
        const {id} = req.params;
        const product = await Product.findByPk(id)

        return res.render('seusPedidos', {product})
    },

    pedidosFinalizados: (req, res)=>{
        const {id} = req.params;
        const product = productModel.findByPk(id)
        
        return res.render('pedidosFinalizados', {product});
    },

    login:(req, res)=>{
        res.render('home/login')
    },

    painelUsuario:(req, res)=>{
        res.render('painelUsuario')
    },

    telaAdministrador:(req, res)=>{
        res.render('telaAdministrador')
    },

    descricaoProduto: async (req,res)=>{
        const { id } = req.params
        const product = await Product.findByPk(id)
        
        res.render('descricaoProduto', {product});
    },
    
    inseirCartao: (req, res)=>{
        res.render('inserirCartao')
    },

    listaProduto: async (req,res)=>{
        const products = await Product.findAll();
        res.render('listagemProdutos', {products})
    }

} 

module.exports = HomeController;