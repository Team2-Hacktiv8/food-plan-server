'use strict'
const express = require('express');
const router = express.Router();
// User Controller
const UserController = require('../controllers/UserController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
// router.get('/google', UserController.google)


module.exports = { userRouter: router }