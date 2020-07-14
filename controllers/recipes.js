const data = require('../data')

exports.index = (req, res) => {
    return res.render("home", { recipes: data })
}

exports.about = (req, res) => {
    return res.render("about")
}

exports.show = (req, res) => {
    return res.render("recipes", { recipes: data })
}

exports.recipe = (req, res) => {
    const recipes = data
    let recipeIndex = req.params.index

    if (recipeIndex > 5)
        recipeIndex -= 6

    if (!recipes[recipeIndex])
        return res.send('page not found!')

    return res.render("recipe", { recipe: recipes[recipeIndex] })
}