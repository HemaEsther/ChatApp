import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoute from "./routes/user.route.js";

const app = express();
dotenv.config();

//middleware
app.use(express.json());

const PORT = process.env.PORT || 8000;
const URI = process.env.MONGO_DBURI;

try {
    mongoose.connect(URI)
    console.log("connected to database");
} catch (error) {
    console.log(error)
}

//routes
app.use("/user",userRoute);

app.get("/",(req,res)=>{
    res.send("Hello");
});

app.listen(PORT,()=>{
    console.log(`ex app listening on port ${PORT}`);
});