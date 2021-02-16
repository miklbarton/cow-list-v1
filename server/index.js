const express = require('express');
const app = express();
const port = 3000;
const db = require('../db/index.js');
const path = require('path');

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', ['http://127.0.0.1:8080']);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/cows', (req, res) => {
  db.makeQuery(req, (err, records) => {

    if (err) {
      console.log(err);
      res.status(404).send(err);

    } else {
      console.log('GET db query was successful');
      res.status(200).send(records);
    }

  });
});

app.post('/api/cows', (req, res) => {
  db.makeQuery(req, (err, records) => {

    if (err) {
      console.log(err);
      res.status(404).send(err);

    } else {
      console.log('POST db query was successful');
      res.status(200).send(records);
    }

  });
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});