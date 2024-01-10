const mongoose = require('mongoose');
const express=require("express");
const schema=mongoose.Schema;
const jwt=require("jsonwebtoken");

const app=express();
const port=3000;
const jwtPassword="secret";

app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://nisrayani13:Nisrayani%4013@cluster0.yutbyie.mongodb.net/users_app");

// Define schemas
const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
});

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{type:schema.Types.ObjectId,ref:'Course'}]
});

const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    image:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

app.get("/",async (req,res)=>{
    await Admin.deleteMany();
    await User.deleteMany();
    await Course.deleteMany();
    res.json({
        Admins:(await Admin.find()).length,
        Users:(await User.find()).length,
        Courses:(await Course.find()).length
    });
})

app.get("/count",async (req,res)=>{
    res.json({
        Admins:(await Admin.find()).length,
        Users:(await User.find()).length,
        Courses:(await Course.find()).length
    });
})

// admin routes
app.post("/admin/signup",async (req,res)=>{
    let admin=new Admin({
        username:req.body.username,
        password:req.body.password
    })
    await admin.save();
    res.json({
        msg:"Admin created succesfully"
    })
})

app.post("/admin/signin",(req,res)=>{
    let payload={
        username:req.body.username,
        password:req.body.password,
        role:"admin"
    }
    let token=jwt.sign(payload,jwtPassword);
    res.json({
        token:token
    })
})

app.post("/admin/courses",async (req,res)=>{
    let token=req.headers.authorization;
    try{
        const payload = jwt.verify(token.split(' ')[1], jwtPassword);
        const course=new Course({
            title: req.body.title, 
            description: req.body.description, 
            price: req.body.price, 
            image: req.body.image
        })
        const saved_course=await course.save();
        res.json({
            msg: 'Course created successfully', 
            courseId: saved_course["_id"]
        })
    }catch(error){
        console.log(error.message);
        res.json({
            msg:"Error occured during decoding of the token"
        })
    }
})

app.get("/admin/courses",async(req,res)=>{
    let token=req.headers.authorization;
    try{
        let payload=jwt.verify(token.split(' ')[1], jwtPassword);
        console.log(payload);
        let courses=await Course.find();
        res.json(courses);
    }catch(error){
        console.log(error.message);
        res.json({
            msg:"Error occured during decoding of the token"
        })
    }
})

//user handlers
app.post("/users/signup",async (req,res)=>{
    let user=new User({
        username:req.body.username,
        password:req.body.password,
        purchasedCourses:[]
    })
    await user.save();
    res.json({
        msg:"'User created successfully"
    })
})

app.post("/users/signin",(req,res)=>{
    let payload={
        username:req.body.username,
        password:req.body.password,
        role:"user"
    }
    let token=jwt.sign(payload,jwtPassword);
    res.json({
        token:token
    })
})

app.get("/users/courses",async (req,res)=>{
    let token=req.headers.authorization;
    try{
        let payload=jwt.verify(token.split(' ')[1],jwtPassword);
        console.log(payload);
        let courses=await Course.find();
        res.json(courses);
    }catch(error){
        console.log(error.message);
        res.json({
            msg:"Error occured while verifying the token"
        })
    }
})

app.post("/users/courses/:courseId",async (req,res)=>{
    let token=req.headers.authorization;
    let courseId=req.params.courseId;
    try{
        let payload=jwt.verify(token.split(' ')[1],jwtPassword);
        console.log(payload);
        let userExist=await User.findOne({username:payload["username"]});
        User.deleteOne({username:payload["username"]});
        userExist.purchasedCourses.push(courseId);
        userExist.save();
        res.json({
            msg:"Course purchased successfully"
        })
    }catch(error){
        console.log(error.message);
        res.json({
            msg:"Error occured while verifying the token"
        })
    }
})

app.get("/users/purchasedCourses",async (req,res)=>{
    let token=req.headers.authorization;
    try{
        let payload=jwt.verify(token.split(' ')[1],jwtPassword);
        console.log(payload);
        let coursesPurchased=await User.findOne({username:payload.username}).populate("purchasedCourses");
        res.json(coursesPurchased);
    }catch(error){
        console.log(error.message);
        res.json({
            msg:"Error occured while verifying the token"
        })
    }
})

module.exports = {
    Admin,
    User,
    Course
}

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})