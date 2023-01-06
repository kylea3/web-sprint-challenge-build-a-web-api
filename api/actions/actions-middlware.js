// add middlewares here related to actions
// add middlewares here related to projects
const Action = require('./actions-model')
const Project = require('../projects/projects-model')

async function validateActionId(req, res, next) {
    try {
        const action = await Action.get(req.params.id);
        if(!action) {
          res.status(404).json({ message: "There is not an action with that id" })
        } else {
          next();
        }
        }
    catch (err) {
          next(err)
          }
}

function validateBody(req, res, next) {
    const { description, completed, notes, project_id } = req.body;
    if (!description || !notes|| !completed || !project_id ) {
        res.status(400).json({ "message": "Need to include a description, completed, notes, and project_id field"})
    } else {
        req.action = { description: description, notes: notes, completed: completed , project_id: project_id  };
        next()
    }
}

async function validateProject_Id(req, res, next) {
        try {
            const project = await Project.get(req.body.project_id);
            if(!project) {
              res.status(404).json({ message: "There is not a project with that id" })
            } else {
              next();
            }
            }
        catch (err) {
              next(err)
              }
    }


module.exports = {
    validateActionId,
    validateBody,
    validateProject_Id
}