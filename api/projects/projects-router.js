const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
// Write your "projects" router here!
router.get('/', (req, res, next) => {
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.get('/:id', async (req, res, next) => {
    const id = await Project.get(req.params.id);
    if(id) {
    Project.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
    } else {
        res.status(404).json({ "message": "There is no project with the given id" })
    }
})

router.post('/', (req, res, next) => {
    const { description, name, completed } = req.body;
    if (!description || !name|| !completed ) {
        res.status(400).json({ "message": "Need to include a completed, description, and name field"})
    } else {
        Project.insert({ description: description, name: name, completed: completed })
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
    }
    
})

router.put('/:id', (req, res, next) => {
    
})

router.delete('/:id', (req, res, next) => {
    
})

router.get('/:id/actions', (req, res, next) => {
    
})

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'There was an error with the project-router'})
}) 

module.exports = router