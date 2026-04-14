// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from DevOps Project!');
});

const port = process.env.PORT || 3000;

app.listen(port, '0.0.0.0', () => {
  console.log(`Running on port ${port}`);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});