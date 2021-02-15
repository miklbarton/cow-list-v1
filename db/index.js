const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/index.js');

app.listen(port, () => {
  console.log(`listening on ${port}`);
});