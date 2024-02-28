const express = require("express")
const { checkInputMiddleware } = require("./middleware")
const { Todo } = require("./db")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors());

app.post("/addTodo",checkInputMiddleware,async(req,res)=>{
    const todo = await Todo.create({
        title:req.body.title,
        description:req.body.description
    })
    if(todo){
        res.send("todo created")
    }
})

app.get("/todos",async(req,res)=>{
    const todos = await Todo.find({})
    res.json({
        todos
    })
})

app.listen(3000,()=>{
    console.log("Todo server running")
})