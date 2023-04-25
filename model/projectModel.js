const mongoose = require('mongoose')
const ProjectSchema = new mongoose.Schema({
    name: String,
    tag: String,
    prompts : [
        {
            prompt : String,
            value: String
        }
    ]
})

const ProjectModel = new mongoose.model('Project', ProjectSchema )

module.exports = ProjectModel