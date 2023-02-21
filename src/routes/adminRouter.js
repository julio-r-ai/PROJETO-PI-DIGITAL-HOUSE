const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/admin/auth/login', AdminController.showLogin);
router.get('/admin/cadastro', AdminController.showCadastro);

router.post('/admin/auth/login', AdminController.login);

module.exports = router;