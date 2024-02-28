const { todoSchema } = require("./zod");

function checkInputMiddleware(req,res,next){
    const todo = req.body;
    const parsed = todoSchema.safeParse(todo);
    if(!parsed.success)
    {
        res.status(411).json("Inputs invalid");
        return;
    }
    next();
}

module.exports = {
    checkInputMiddleware
}