const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("WELCOME");
})

app.listen('3000', () =>{
    console.log("HI");
})