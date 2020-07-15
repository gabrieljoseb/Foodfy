const data = require('../data')
const { recipe } = require('./recipes')

exports.index = (req, res) => {
    return res.render("admin/index", { recipes: data })
}

exports.show = (req, res) => {
    const recipes = data
    let recipeIndex = req.params.index

    if (!recipes[recipeIndex])
        return res.send('page not found!')

    return res.render("admin/details", { recipe: recipes[recipeIndex] })
}

exports.create = (req, res) => {
    return res.render("home")
}

exports.edit = (req, res) => {
    return res.render("home")
}

exports.post = (req, res) => {
    return res.render("home")
}

exports.put = (req, res) => {
    return res.render("home")
}
exports.delete = (req, res) => {
    return res.render("home")
}