const mongoose = require("mongoose")
mongoose.connect("your mongo url😆")

const todoSchema = new mongoose.Schema({
    title: String,
    description: String
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = {
    Todo
}
