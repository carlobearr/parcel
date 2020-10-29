const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("WTF");
})

app.listen(3000, () => {
    console.log("starting at localhost:3000");
})