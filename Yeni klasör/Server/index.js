const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeModel = require('./Employee');


const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:14521453@cluster0.oeoj1.mongodb.net/fullstack?retryWrites=true&w=majority");
app.get("/getEmployees",(req,res)=>{
    EmployeModel.find({},(err,result)=>{
        if (err) {
            res.json(err);
        }
        else{
            res.json(result);
        }
    })
})
app.post("createEmployees",async(req,res)=>{
    const employee=req.body;
    const newEployee=new EmployeModel(employee);
    await newEmployee.save();
    res.json(employee);
})

app.listen(3030,()=>{
    console.log("Server Çalışıyor")
})


