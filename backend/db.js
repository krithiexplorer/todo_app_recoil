const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://learning:GNO0z745ZWvgVARG@cluster0.stznz.mongodb.net/todo-app-2")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = {
    Todo
}