require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { PORT } = process.env;
const mongoose = require('mongoose');
const test = require('./dbroutes');
const jwt = require('jsonwebtoken');
const { getUsers } = require('../server/users');

const secretKey = '1234';

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
  const { username, password } = req.body;
  const users = getUsers(); // Get users from the external file

  const user = users.find((u) => u.username === username);

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // If the user is found and the password is correct, generate a JWT
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

  res.json({ message: 'Authentication successful', token });
});

app.get('/api', (req, res) => {
  res.status(200);
  console.log('You have hit the api page');
});

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`);
});
