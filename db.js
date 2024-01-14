const mongoose=require("mongoose");
const schema=mongoose.Schema;

mongoose.connect("mongodb+srv://nisrayani13:Nisrayani%4013@cluster0.yutbyie.mongodb.net/users_app")

//defining schema
const todoSchema=new schema({
        title:String,
        description:String,
        completed:Boolean
})
const Todo=mongoose.model("Todos",todoSchema);

module.exports={
    Todo:Todo
}