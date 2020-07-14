const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.render("home", { recipes: data })
})

routes.get('/about', (req, res) => {
    res.render("about")
})

routes.get('/recipes', (req, res) => {
    res.render("recipes", { recipes: data })
})

routes.get('/recipes/:index', (req, res) => {
    const recipes = data
    let recipeIndex = req.params.index

    if (recipeIndex > 5) 
        recipeIndex -= 6

    if (!recipes[recipeIndex]) 
        return res.send('page not found!')
    
    return res.render("recipe", { recipe: recipes[recipeIndex] })
})

routes.get('/recipe', (req, res) => {
    res.render('recipe', { recipe: data })
})

module.exports = routes