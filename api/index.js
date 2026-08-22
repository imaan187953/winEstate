import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose.connect(process.env.MONGODB).then(() => {
    console.log("database connected successfully")
}).catch((err) => {
    console.log("connection failed", err);
})

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is working!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);


//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});


app.listen(3000, ()=> {
    console.log("server is running on port 3000")
})

