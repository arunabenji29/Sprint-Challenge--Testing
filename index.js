const server = require('./api/server.js')

port = process.env.PORT || 4466

server.listen(port, () => {
    console.log(`***** API listening at ${port} ******`)
})