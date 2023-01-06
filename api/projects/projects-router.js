const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
const { validateUserId, validateBody } = require('./projects-middleware')
// Write your "projects" router here!
router.get('/', (req, res, next) => {
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.get('/:id', validateUserId, async (req, res, next) => {
    Project.get(req.params.id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.post('/', validateBody, (req, res, next) => {
        Project.insert(req.project)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
    })

router.put('/:id', validateUserId, validateBody, (req, res, next) => {
        console.log(req.params.id)
        console.log(req.project)
        Project.insert(req.params.id, req.project)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
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