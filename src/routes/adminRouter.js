const express = require('express');
const AdminController = require('../controllers/AdminController');
const router = express.Router();
const upload = require ('../middlewares/upload.js')
const isLogin = require('../middlewares/isLogin')
const isAdmin = require('../middlewares/isAdmin')

router.use(isLogin);
router.use(isAdmin);


router.get('/admin/home', AdminController.showHome);
router.get('/admin/produtos', AdminController.showProdutos);
router.get('/admin/cadastrarProduto', AdminController.showCadastroProduto);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProduto);

router.post('/admin/produtos/cadastro', upload.single('image'), AdminController.cadastroProduto);
router.put('/admin/produtos/:id/editar', AdminController.updateProduto);
router.delete('/admin/produtos/:id/deletar', AdminController.deleteProduto);

module.exports = router;        
 