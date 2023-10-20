require('dotenv').config();
const express = require('express');
const app = express();
const { PORT } = process.env;
const mongoose = require('mongoose');
const test = require('./dbroutes');

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.on('open', () => console.log('connected to database'));

app.get('/', (req, res) => {
  res.status(200);
  res.setHeader('Content-Type', 'application/json');
  res.send(test);
});

app.post('/login', (req, res) => {
  res.send('ok');
});

app.get('/api', (req, res) => {
  res.send('You have hit the api page');
  res.send(test);
  res.write(test);
  console.log('You have hit the api page');
});

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`);
});
