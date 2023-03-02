const express = require('express');
const AdminController = require('../controllers/AdminController');
const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/produtos', AdminController.showProdutos);
router.get('/admin/cadastrarProduto', AdminController.showCadastroProduto);

router.post('/admin/login', AdminController.login)
router.post('/admin/produtos/cadastro', AdminController.cadastroProduto);


module.exports = router;        