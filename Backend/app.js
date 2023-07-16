const express=require('express');
const mongoose=require('mongoose');
const router=require("./routes/bookRoutes")
const app=express();
const cors=require('cors');
//Middleware
app.use(express.json());
app.use(cors());
app.use("/books",router) //localhost:5000/books
mongoose.connect("mongodb://127.0.0.1:27017/mongodb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.0")
.then(()=>console.log("Connected to Database"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));

// app.use("hello world!");