const fs = require('fs')
const data = require('../data.json')

exports.index = (req, res) => {
    return res.render("admin/index", { recipes: data.recipes })
}

exports.show = (req, res) => {
    const recipes = data.recipes
    let recipeIndex = req.params.index

    if (!recipes[recipeIndex])
        return res.send('page not found!')

    return res.render("admin/details", { recipe: recipes[recipeIndex] })
}

exports.create = (req, res) => {
    return res.render("home")
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == "")
            return res.send('please, fill all the fields')
    }

    let id = 1
    const lastRecipe = data.recipes[data.recipes.length - 1]

    if (lastRecipe) id = lastRecipe.id + 1

    data.recipes.push({
        id,
        ...req.body,
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send('An error occurred!')

        return res.redirect('admin/index')
    })
}

exports.edit = (req, res) => {
    return res.render("home")
}

exports.put = (req, res) => {
    return res.render("home")
}
exports.delete = (req, res) => {
    return res.render("home")
}