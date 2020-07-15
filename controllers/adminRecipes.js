const data = require('../data')
const { recipe } = require('./recipes')

exports.index = (req, res) => {
    return res.render("admin/index", { recipes: data })
}

exports.create = (req, res) => {
    return res.render("home")
}

exports.show = (req, res) => {
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