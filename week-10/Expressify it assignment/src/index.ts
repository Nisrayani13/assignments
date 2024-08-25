import { PrismaClient } from "@prisma/client";
import express from "express";
import userRouter from "./router/userRouter";
import todoRouter from "./router/todoRouter";
import dropDataInTables from "./setup";

const prisma = new PrismaClient();

const router=express.Router();
const app=express();
const port=3000;

dropDataInTables();

app.use(express.json());
app.use("/user",userRouter);
app.use("/todo",todoRouter);

app.listen(port,()=>{
    console.log("Server listening on port:"+port);
})