const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.set("view engine", "njk")
server.use(express.static('public'))

nunjucks.configure("views", {
     express: server
    })

server.get('/', (req, res) => {
    res.render("home")
})

server.listen(5000, () => {
    console.log('server is running')
})