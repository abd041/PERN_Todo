import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();


app.get("/" , (req , res)=>{
    res.json({"message" : "Hello world"});
})


app.listen(5000 , () => {
    console.log("server is running at 5000")
})