const express = require('express')
const routes = express.Router()
const data = require('./data')
const recipes = require('./controllers/recipes')

routes.get('/', (req, res) => {
    return res.redirect('/index');
})

routes.get('/index', recipes.index)
routes.get('/about', recipes.about)
routes.get('/recipes', recipes.show)
routes.get('/recipes/:index', recipes.recipe)


module.exports = routes