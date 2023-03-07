const express = require('express');
const AdminController = require('../controllers/AdminController');
const router = express.Router();
const multer = require('multer');

router.get('/admin/login', AdminController.showLogin);
router.get('/admin/home', AdminController.showHome);
router.get('/admin/produtos', AdminController.showProdutos);
router.get('/admin/cadastrarProduto', AdminController.showCadastroProduto);
router.get('/admin/produtos/:id/editar', AdminController.showEditarProduto);

/* router.post('/admin/login', AdminController.login); */

const storage = multer.diskStorage({
    destination: function(req, file, callback){
        callback(null, 'src/public/img')
    },
    filename: function(req, file, callback){
        let persistedFilename = `${Date.now()}_product_${file.originalname}`
        callback(null, persistedFilename)
    }
});

const upload = multer({ storage });

router.post('/admin/produtos/cadastro', upload.single('image'), AdminController.cadastroProduto);
router.put('/admin/produtos/:id/editar', AdminController.updateProduto);
router.delete('/admin/produtos/:id/deletar', AdminController.deleteProduto);

module.exports = router;        
