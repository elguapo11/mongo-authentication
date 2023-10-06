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
  res.send(test);
  console.log('you have hit the home page');
});

app.get('/api', (req, res) => {
  res.send('You have hit the api page');
  console.log('You have hit the api page');
});

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`);
});
