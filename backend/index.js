import express from 'express';
const app=express();
app.get("/",(req,res)=>{
    res.send({"message": "hello from backend side"});
})
app.listen(2000,()=>{
    console.log("server is listening at port no: 2000")
})