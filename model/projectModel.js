const mongoose = require('mongoose')
const ProjectSchema = new mongoose.Schema({
    name: String,
    tag: String,
    prompts : [
        {
            prompt : String,
            value: String
        }
    ],
    user:  {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    }
})

const ProjectModel = new mongoose.model('Project', ProjectSchema )

module.exports = ProjectModel