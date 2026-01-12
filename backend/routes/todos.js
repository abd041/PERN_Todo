import { Router } from "express";
import pool from "../db.js";

const router = Router();

router.post("/" ,async (req,res) => {
   try{
     const {description , completed} = req.body;
     const newTodo = await pool.query(
        "INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
        [description,completed || false]
     );
     res.json(newTodo.rows[0])

   }
   catch(error){
    console.log(error.message);
    res.status(500).send("server error")
   }

})

router.get("/" ,async (req , res) => {
   try{
     const allTodos = await pool.query("SELECT * FROM todo");
     res.json(allTodos.rows)

   }
   catch(error){
      console.log(error.message);
      res.status(500).send("server error")
   }

})


export default router