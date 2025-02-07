const express = require('express')
const Project = require('./projects-model')
const router = express.Router();
const { validateProjectId, validateBody } = require('./projects-middleware')
// Write your "projects" router here!
router.get('/', (req, res, next) => {
    Project.get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(next)
})

router.get('/:id', validateProjectId, async (req, res, next) => {
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

router.put('/:id', validateProjectId, validateBody, (req, res, next) => {
       
    Project.update(req.params.id, req.project)
            .then(project => {
                res.status(201).json(project)
            })
            .catch(next)
})

router.delete('/:id', validateProjectId, async (req, res, next) => {
         Project.remove(req.params.id)
            .then(result => {
                res.status(200).json( {"message": "succesfully deleted"} )
            })
            .catch(next)
})

router.get('/:id/actions', validateProjectId, (req, res, next) => {
        Project.getProjectActions(req.params.id)
            .then(action => {
                res.status(200).json(action)
            })
            .catch(next)
})  

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'There was an error with the project-router'})
}) 

module.exports = router