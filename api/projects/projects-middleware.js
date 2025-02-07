// add middlewares here related to projects
const Project = require('./projects-model')

async function validateProjectId(req, res, next) {
    try {
        const project = await Project.get(req.params.id);
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

function validateBody(req, res, next) {
    const { description, name, completed } = req.body;
    if (!description || !name || (completed !== false && completed !== true)) {
        res.status(400).json({ "message": "Need to include a description, completed, and name field"})
    } else {
        req.project = { description: description, name: name, completed: completed };
        next()
    }
}


module.exports = {
    validateProjectId,
    validateBody
}