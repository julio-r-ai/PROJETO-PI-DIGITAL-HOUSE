const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router();

router.get('/admin/login', AuthController.showLogin);
router.get('/admin/usuariosCadastro', AuthController.showCadastroUsuario);

router.post('/admin/usuarios/cadastro', AuthController.createUsuarios);
router.post('/admin/login', AuthController.login)

module.exports = router;
