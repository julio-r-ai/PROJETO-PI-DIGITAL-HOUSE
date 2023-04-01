const express = require('express')
const AuthController = require('../controllers/AuthController')
const router = express.Router();


router.get('/login', AuthController.showLogin);
router.get('/admin/auth/adminLogin', AuthController.showAdminLogin);
router.get('/cadastro', AuthController.showCadastroUsuario);

router.post('/cadastro', AuthController.createUsuarios);
router.post('/login/', AuthController.login)

module.exports = router;
