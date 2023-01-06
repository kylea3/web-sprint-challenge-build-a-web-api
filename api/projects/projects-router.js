const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
// Write your "projects" router here!
router.get('/api/projects', (req, res) => {
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/api/projects/:id', (req, res) => {
    
})

router.post('/api/projects', (req, res) => {
    
})

router.put('/api/projects/:id', (req, res) => {
    
})

router.delete('/api/projects:id', (req, res) => {
    
})

router.get('/api/projects/:id/actions', (req, res) => {
    
})

module.exports = router