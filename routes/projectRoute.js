const express = require('express')
const { controlSignup, controlSignin } = require('../controller/authController/authController')
const ProjectModel = require('../model/projectModel')
const ProjectRoute = express.Router()


ProjectRoute.post('/add', (req, res)=>{
    const {name, tag, prompts} = req.body
    const myModel = new ProjectModel({
        name, tag,  prompts
    })
    myModel.save()
    .then(result=>{
        res.send(result)
    })
})
ProjectRoute.get('/all', (req, res)=>{
    ProjectModel.find()
    .then(result=>{
        res.send(result)
    })
})

module.exports = ProjectRoute