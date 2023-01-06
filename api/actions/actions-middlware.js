// add middlewares here related to actions
// add middlewares here related to projects
const Action = require('./actions-model')

async function validateUserId(req, res, next) {
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
    const { description, name, completed } = req.body;
    if (!description || !name|| !completed ) {
        res.status(400).json({ "message": "Need to include a description and name field"})
    } else {
        req.project = { description: description, name: name, completed: completed || false };
        next()
    }
}


module.exports = {
    validateUserId,
    validateBody
}