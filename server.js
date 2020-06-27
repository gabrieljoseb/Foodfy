const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res) => {
    res.render("home", { item: data })
})

server.get('/about', (req, res) => {
    res.render("about")
})

server.get('/recipes', (req, res) => {
    res.render("recipes", { item: data })
})

server.listen(5000, () => {
    console.log('server is running')
})