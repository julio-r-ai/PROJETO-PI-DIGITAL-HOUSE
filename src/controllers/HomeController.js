const productModel = require('../database/productsModel');

const  { Produto, Pedido }  = require('../models') 


const HomeController = {
    home: async (req, res) =>{
        const allProducts = await Produto.findAll();

        return res.render('home', {allProducts});
    },

    bolos: async (req, res) =>{
        const allProducts = await Produto.findAll();
       
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
        const product = await Produto.findByPk(id)

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
        const product = await Produto.findByPk(id)
        res.render('descricaoProduto', {product});
    },
    
   

    listaProduto: async (req,res)=>{
        const products = await Produto.findAll();
        res.render('listagemProdutos', {products})
    },

    pedidoEnviado: async (req, res)=>{
        const {id} = req.params
        const use = res.locals.user

        const arrayProduto = await Produto.findByPk(id)
        const priceProduto = arrayProduto.dataValues.price
        

        console.log(priceProduto)
        //console.log(arrayProduto.dataValues)
      
        const newPedido = await Pedido.create({
             price: priceProduto,
             usuarioId: use.id,
             produtoId: id
        })   

        return res.render('pedidosFinalizados')

    }

} 

module.exports = HomeController;


