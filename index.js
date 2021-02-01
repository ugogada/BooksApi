const express  = require('express');
const mongoose = require('mongoose');
const route = require('./route');

// connecting to mongodb
mongoose.connect("mongodb+srv://Uvesh:Uvesh@student.oqnzh.mongodb.net/Student?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology: true}).then(
    ()=>{
        const app = express();
        app.use("/api",route);
        app.listen(process.env.PORT || 3000,()=>{
            console.log("Server Started...!");
        })
    }
);