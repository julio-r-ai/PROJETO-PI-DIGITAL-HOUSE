const express = require('express');
const HomeController = require('../controllers/HomeController');
const isLogin = require('../middlewares/isLogin')

const router = express.Router();

router.use(isLogin)
router.get('/', HomeController.home);
router.get('/home', HomeController.home);
router.get('/bolos', HomeController.bolos);
router.get('home/login', HomeController.login);
router.get('/contato', HomeController.contato);
router.get('/sobre', HomeController.sobre);
router.get('/seusPedidos/:id', HomeController.seusPedidos);
router.get('/painelUsuario', HomeController.painelUsuario);
router.get('/descricaoProduto/:id', isLogin, HomeController.descricaoProduto);
router.get('/inserirCartao', HomeController.inseirCartao);
router.get('/pedidosFinalizados/:id', HomeController.pedidosFinalizados);

//listagem produtos
router.get('/listagemProdutos', HomeController.listaProduto);


module.exports = router;

