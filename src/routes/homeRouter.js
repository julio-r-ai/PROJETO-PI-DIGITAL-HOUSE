const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();


router.get('/home', HomeController.home);
router.get('/bolos', HomeController.bolos);
router.get('/contato', HomeController.contato);
router.get('/sobre', HomeController.sobre);
router.get('/carrinho', HomeController.carrinho);
router.get('/login', HomeController.login);
router.get('/cadastro', HomeController.cadastro);
router.get('/painelUsuario', HomeController.painelUsuario);
router.get('/descricaoProduto', HomeController.descricaoProduto)

module.exports = router;

