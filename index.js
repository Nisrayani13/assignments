const express=require("express");
const { createTodo }=require("./types");
const { updateTodo }=require("./types");
const { Todo }=require("./db");
const cors=require("cors");

const app=express();
const port=3000;

app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173"
}));

app.get("/todos",async (req,res)=>{
    res.json(await Todo.find())
})

app.post("/todos",async (req,res)=>{
    let userData=req.body
    if(createTodo.safeParse(userData).success===false){
        res.json({
            msg:"your data is invalid"
        })
        return;
    }
    else{
        await Todo.create({
            title:userData.title,
            description:userData.description,
            completed:false
        })
        res.json({
            msg:"Todo created"
        })
    }
})

app.put("/completed",async (req,res)=>{
    let userId=req.body;
    if(!updateTodo.safeParse(userId).success){
        res.json({
            msg:"Your id is Invalid"
        })
        return;
    }
    else{
        await Todo.updateOne({_id:userId.id},{
            completed:true
        })
    }
    res.json({
        msg:"Update completed"
    })
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})