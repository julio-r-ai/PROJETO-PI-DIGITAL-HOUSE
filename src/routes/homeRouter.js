const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();


router.get('/', HomeController.home);
router.get('/home', HomeController.home);
router.get('/bolos', HomeController.bolos);
router.get('/contato', HomeController.contato);
router.get('/sobre', HomeController.sobre);
router.get('/carrinho/:id', HomeController.carrinho);
router.get('/painelUsuario', HomeController.painelUsuario);
router.get('/descricaoProduto/:id', HomeController.descricaoProduto);
router.get('/inserirCartao', HomeController.inseirCartao);

//listagem produtos
router.get('/listagemProdutos', HomeController.listaProduto);


module.exports = router;

