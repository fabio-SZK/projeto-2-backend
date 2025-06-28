const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/', authController.getHome);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/dashboard', authController.getDashboard);
router.get('/logout', authController.logout);
router.get('/register', authController.getRegister);
router.post('/register', authController.postRegister);

module.exports = router;