const express = require('express')
const routes = express.Router()
const data = require('./data')
const recipes = require('./controllers/recipes')
const adminRecipes = require('./controllers/adminRecipes')

routes.get('/', (req, res) => {
    return res.redirect('/index');
})

routes.get('/index', recipes.index)
routes.get('/about', recipes.about)
routes.get('/recipes', recipes.show)
routes.get('/recipes/:index', recipes.recipe)


routes.get("/admin/recipes", adminRecipes.index);
routes.get("/admin/recipes/create", adminRecipes.create);
routes.get("/admin/recipes/:index", adminRecipes.show);
routes.get("/admin/recipes/:index/edit", adminRecipes.edit);
routes.post("/admin/recipes", adminRecipes.post);
routes.put("/admin/recipes", adminRecipes.put);
routes.delete("/admin/recipes", adminRecipes.delete);


module.exports = routes