const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
// Write your "projects" router here!
router.get('/', (req, res) => {
    console.log(Project.get())
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/:id', (req, res) => {
    
})

router.post('/', (req, res) => {
    
})

router.put('/:id', (req, res) => {
    
})

router.delete('/:id', (req, res) => {
    
})

router.get('/:id/actions', (req, res) => {
    
})

module.exports = router