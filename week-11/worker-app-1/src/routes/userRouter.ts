import { PrismaClient } from '@prisma/client';
import { Hono } from 'hono'
import { z } from "zod";
import { Jwt } from 'hono/utils/jwt';
import { env } from 'hono/adapter';

const prisma=new PrismaClient;
const userRouter=new Hono();

const userInputSchema=z.object({
    username:z.string().min(1,{message:"username cannot be empty"}).optional(),
    email:z.string().email(),
    password:z.string().min(1,{message:"Password cannot be empty"})
})

userRouter.post("/signup",async (c)=>{
    const body:{
        username:string,
        email:string,
        password:string
    }=await c.req.json();
    if(!userInputSchema.safeParse(body)){ return c.body("Error while parsing", 201) };

    const userExist=await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if(userExist)return c.body("This email already Exists!!",201)

    const user=await prisma.user.create({
        data:{
            username:body.username,
            email:body.email,
            password:body.password
        }
    })

    // const token=Jwt.sign({userId:user.id},import.meta.env.Jwt_password);

})

export default userRouter