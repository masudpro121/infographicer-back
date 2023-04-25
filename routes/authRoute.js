const express = require('express')
const { controlSignup, controlSignin, validate } = require('../controller/authController/authController')
const AuthRoute = express.Router()


AuthRoute.post('/signup', controlSignup)
AuthRoute.post('/signin', controlSignin)
AuthRoute.get('/validate', validate)

module.exports = AuthRoute