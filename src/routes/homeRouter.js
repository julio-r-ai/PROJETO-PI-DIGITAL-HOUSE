const express = require('express');
const { pedidosFinalizados } = require('../controllers/HomeController');
const HomeController = require('../controllers/HomeController');
const isLogin = require('../middlewares/isLogin');
const isLogado = require('../middlewares/isLogado');

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
router.get('/descricaoProduto/:id', isLogado, HomeController.descricaoProduto);
router.get('/pedidosFinalizados/:id', HomeController.pedidosFinalizados);
router.get('/listagemProdutos', HomeController.listaProduto);
router.post('/seusPedidos/:id', HomeController.pedidoEnviado);

module.exports = router;

