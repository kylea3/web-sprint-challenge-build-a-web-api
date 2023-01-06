const server = require('./api/server')

port = process.env.PORT || 9000

server.listen(port, () => console.log(`making magic on ${port}`))