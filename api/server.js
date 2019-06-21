const express = require('express')

const helmet = require('helmet')
const boardRouter = require('../boards/boards-router.js')

const server = express()

server.use(helmet())

server.use(express.json())

server.get('/',(req,res) => {
    res.status(200).json({api:"up"})
})

server.use('/games',boardRouter)

module.exports = server