const express = require('express');
const AdminController = require('../controllers/AdminController');

const router = express.Router();

router.get('/admin/login', AdminController.showLogin);
router.get('/admin', AdminController.showAdmin);

router.post('/admin/login', AdminController.login);

module.exports = router;