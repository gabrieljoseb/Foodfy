const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')
const routes = require('./routes')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noCache: true
})

server.listen(5000, () => {
    console.log('server is running')
})