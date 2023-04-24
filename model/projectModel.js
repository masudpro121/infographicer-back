const mongoose = require('mongoose')
const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    tag: [],
    projects : [
        {
            prompt : String,
            value: String
        }
    ]
})

const ProjectModel = new mongoose.model('Project', ProjectSchema )

module.exports = ProjectModel