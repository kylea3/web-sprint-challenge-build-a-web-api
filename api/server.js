const express = require('express');
const server = express();



// Configure your server here
server.use(express.json())


// Build your actions router in /api/actions/actions-router.js
const actionsRouter = require('./actions/actions-router')
const projectsRouter = require('./projects/projects-router')
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'There was an error with the server'})
}) 

module.exports = server;
