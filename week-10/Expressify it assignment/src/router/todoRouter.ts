import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const todoRouter = express.Router();

interface Todo {
  title: string;
  about: string;
}
interface ReqBody {
  userId: number;
  todos: Todo[];
}
todoRouter.post("/put", async (req: Request, res: Response) => {
    try {
        const { userId, todos }: ReqBody = req.body;
        todos.forEach(async (todo) => {
        await prisma.todo.create({
            data: {
            title: todo.title,
            about: todo.about,
            userId: userId,
            },
        });
        });
        return res.json({
        msg: "todos got added successfully!!",
        });
    } catch (err) {
        console.log(err);
        return res.json(err);
    }
});

todoRouter.get("/get",async (req:Request,res:Response)=>{
    try{
        const todos=await prisma.todo.findMany({
            where:{
                userId:req.body.userId
            }
        })
        return res.json(todos)
    }catch(err){
        return res.json(err)
    }
})

export default todoRouter;
