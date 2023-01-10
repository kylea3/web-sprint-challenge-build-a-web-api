const express = require('express')
const Action = require('./actions-model')
const { validateActionId, validateBody, validateProject_Id } = require('./actions-middlware')
const router = express.Router();

router.get('/', (req, res, next) => {
    Action.get()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.get('/:id', validateActionId, async (req, res, next) => {
    Action.get(req.params.id)
        .then(action  => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.post('/', validateBody, validateProject_Id, (req, res, next) => {
    Action.insert(req.action)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})

router.put('/:id', validateActionId, validateBody, (req, res, next) => {
    Action.update(req.params.id, req.project)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})

router.delete('/:id', validateActionId, async (req, res, next) => {
    Action.remove(req.params.id)
       .then(result => {
           res.status(200).json( {"message": "succesfully deleted"} )
       })
       .catch(next)
})

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'There was an error with the project-router'})
}) 

module.exports = router;
