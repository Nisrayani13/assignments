import { Prisma, PrismaClient } from "@prisma/client";
import express, {Request, Response} from "express";
import z from "zod";

const prisma=new PrismaClient();
const userRouter=express.Router();

const userSignupSchema=z.object({
    username:z.string(),
    password:z.string()
})
userRouter.post("/signup",async (req:Request,res:Response)=>{
    if(userSignupSchema.safeParse(req.body).success){
        try{
            const user=await prisma.user.create({
                data:{
                    username:req.body.username,
                    password:req.body.password
                }
            })
            return res.json({
                message:"User created successfully",
                user:user
            });
        }catch(error: unknown){
            console.error(error)
            return res.status(400)
        }
    }
    return res.json({
        message:"Problem with validation in zod"
    })
})

export default userRouter