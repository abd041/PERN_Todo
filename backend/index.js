import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todos.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// routes for todos

app.use("/todos" , todoRoutes);

app.listen(5000 , () => {
    console.log("server is running at 5000")
})