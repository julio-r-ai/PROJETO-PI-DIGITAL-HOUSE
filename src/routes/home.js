const express = require('express');
const HomeController = require('../controllers/HomeController');

const router = express.Router();

module.exports = router;


router.get('/home', HomeController.home);
router.get('/bolos', HomeController.bolos);
router.get('/contato', HomeController.contato);
router.get('/sobre', HomeController.sobre);
router.get('/carrinho', HomeController.carrinho);
router.get('/login', HomeController.login);
router.get('/cadastro', HomeController.cadastro);
router.get('/admin', HomeController.admin);

module.exports = router;

