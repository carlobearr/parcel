const express = require('express');
const app = express();
const connectToDatabase = require('./db')
const Note = require('./Note')

app.get('/', async(req,res) => {
    await connectToDatabase()
    const notes = await Note.find()
    res.send({ v: 3, notes })
})

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("starting at localhost:3000");
})