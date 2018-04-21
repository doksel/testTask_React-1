// import express from "express";
const express = require ('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('Hello from GET');
})

app.listen(3000,()=>{
    console.log('API app started....');
})