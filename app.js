const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send("TEST");
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("starting at localhost:3000");
})