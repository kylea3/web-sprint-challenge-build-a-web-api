const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
// Write your "projects" router here!
router.get('/', (req, res) => {
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
        })
})

router.get('/:id', async (req, res) => {
    const id = await Project.get(req.params.id);
    if(id) {
    Project.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(500).json({ "message": "There was an issue with the server" })
        })
    } else {
        res.status(404).json({ "message": "There is no project with the given id" })
    }
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