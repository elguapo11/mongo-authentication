'use strict';

const loginRoutes = require('./routes/login');
const postRoutes = require('./routes/posts');

async function init() {
  require('dotenv').config();
  const express = require('express');
  const app = express();
  const cors = require('cors');
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  const { PORT } = process.env;
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
  const db = mongoose.connection;

  db.on('error', (error) => console.error(error));
  db.on('open', () => console.log('connected to database'));

  app.use('/home', (req, res, next) => {
    res.sendStatus(200);
    next();
  });

  app.use(cors());
  app.use(postRoutes);
  app.use(loginRoutes);

  app.listen(PORT, () => {
    console.log(`My server is running on ${PORT}`);
  });
}

init();
