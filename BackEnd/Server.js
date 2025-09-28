const express = require('express');

const app = express();

const port = 1001;

app.get('/', (req, res) => {
  res.send('Hello World!, This is basic setup of backend.');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});