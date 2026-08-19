import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("database connected successfully")
}).catch((err) => {
    console.log("connection failed", err);
})

const app = express();

app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})