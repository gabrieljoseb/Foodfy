const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.get('/', (req, res) => {
    res.render("home")
})

server.listen(5000, () => {
    console.log('server is running')
})