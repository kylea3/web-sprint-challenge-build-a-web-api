const express = require('express')
const Action = require('./actions-model')
const { validateUserId, validateBody, validateProject_Id } = require('./actions-middlware')
const router = express.Router();

router.get('/', (req, res, next) => {
    Action.get()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.get('/:id', validateUserId, async (req, res, next) => {
    Action.get(req.params.id)
        .then(action  => {
            res.status(200).json(action)
        })
        .catch(next)
})

router.post('/', validateBody, validateProject_Id, (req, res, next) => {
    console.log(req.action)
    Action.insert(req.action)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})

router.put('/:id', validateUserId, validateBody, (req, res, next) => {
    Action.insert(req.params.id, req.project)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(next)
})

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'There was an error with the project-router'})
}) 

module.exports = router;
