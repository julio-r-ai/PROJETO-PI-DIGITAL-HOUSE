const productModel = require('../model/productsModel');


const HomeController = {
    home: (req, res) =>{
        const products = productModel.findAll();

        return res.render('home', {products})
    },

    bolos: (req, res) =>{
        const products = productModel.findAll();

        return res.render('bolos', {products})
    },
    
    contato: (req, res)=>{
        return res.render('contato')
    },

    sobre: (req, res)=>{
        return res.render('sobre')
    },

    seusPedidos: (req, res)=>{
        const {id} = req.params;
        const product = productModel.findByPk(id)
        

        return res.render('seusPedidos', {product})
    },

    pedidosFinalizados: (req, res)=>{
        const {id} = req.params;
        const product = productModel.findByPk(id)
        

        return res.render('pedidosFinalizados', {product});
    },

    login:(req, res)=>{
        res.render('/login')
    },

    painelUsuario:(req, res)=>{
        res.render('painelUsuario')
    },

    telaAdministrador:(req, res)=>{
        res.render('telaAdministrador')
    },

    descricaoProduto:(req,res)=>{
        const { id } = req.params;

        const product = productModel.findByPk(id)
        
        res.render('descricaoProduto', {product});
       
        
    },
    
   
    inseirCartao: (req, res)=>{
        res.render('inserirCartao')
    },


    //Listagem de produtos

    listaProduto: (req,res)=>{
        const products = database.products;
        res.render('listagemProdutos', {products})
    }

} 



module.exports = HomeController;