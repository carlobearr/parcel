const express = require('express');
const cors = require('cors');
const adminRoute = require('./routes/admin.js');

const app = express();
app.use(cors());


app.use('/', adminRoute);

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("starting at localhost:30000");
})