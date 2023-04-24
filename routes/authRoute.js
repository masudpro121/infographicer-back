const express = require('express')
const { controlSignup, controlSignin } = require('../controller/authController/authController')
const AuthRoute = express.Router()


AuthRoute.post('/signup', controlSignup)
AuthRoute.post('/signin', controlSignin)

module.exports = AuthRoute