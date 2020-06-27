const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.set("view engine", "njk")

server.use(express.static('public'))

nunjucks.configure("views", {
    express: server,
    autoescape: true,
    noCache: true
})

server.get('/', (req, res) => {
    res.render("home", { recipes: data })
})

server.get('/about', (req, res) => {
    res.render("about")
})

server.get('/recipes', (req, res) => {
    res.render("recipes", { recipes: data })
})

server.get('/recipes/:index', (req, res) => {
    const recipes = data
    let recipeIndex = req.params.index

    // did because in recipes page, the data is repeated twice
    if (recipeIndex > 5) 
        recipeIndex -= 6

    if (!recipes[recipeIndex]) 
        return res.send('page not found!')
    
    return res.render("recipe", { recipe: recipes[recipeIndex] })
})

server.get('/recipe', (req, res) => {
    res.render('recipe', { recipe: data })
})

server.listen(5000, () => {
    console.log('server is running')
})