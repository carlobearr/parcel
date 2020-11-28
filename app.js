// server.js
//
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.HTTP_PORT || 4001;
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

app.get('/', (req, res) => {
  res.send('just gonna send it');
});

app.get('/flower', (req, res) => {
  res.json({
    name: 'Dandelion',
    colour: 'Blue-ish'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});