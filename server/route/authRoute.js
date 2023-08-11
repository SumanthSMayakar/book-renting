const authRoute = require('express').Router()
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware')
const adminAuth = require('../middleware/adminAuth')

authRoute.post('/register', authController.register);
authRoute.post('/login', authController.login);
authRoute.get('/logout', authController.logout);
authRoute.get('/current/user', authMiddleware, authController.currentUser);
authRoute.get('/token', authController.authToken);

module.exports = authRoute;