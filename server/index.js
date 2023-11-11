'use strict';

(async function init() {
  require('dotenv').config();
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  app.use(bodyParser.json());
  const { PORT } = process.env;
  const mongoose = require('mongoose');

  mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
  const db = mongoose.connection;

  db.on('error', (error) => console.error(error));
  db.on('open', () => console.log('connected to database'));

  // app.use(
  //   '/api',
  //   (req, res, next) => {
  //     res.send(200);
  //     console.log('alive');
  //     next();
  //   },
  //   require('./routes/login'),
  //   require('./routes/posts'),

  //   app.get('/home', (req, res) => {
  //     res.send('ok');
  //     console.log('hit home page');
  //   })
  // );

  app.listen(PORT, () => {
    console.log(`My server is running on ${PORT}`);
  });
})();
