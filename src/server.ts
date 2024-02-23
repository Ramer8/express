 import express, { Application } from "express";
// import express, { Request, Response } from "express";

import dotenv from 'dotenv';

dotenv.config()

const app: Application = express();

const PORT = process.env.PORT || 4000

app.get('/healthy',(req,res)=>{
res.status(200).json({
    success: true,
    message: "it's alive"
})
})

app.listen(PORT,()=>{
    console.log(`Server is running at PORT: ${PORT}`);
})



