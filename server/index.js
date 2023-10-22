require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const { PORT } = process.env;
const mongoose = require('mongoose');
const postController = require('./postController');
const loginController = require('./loginController');

mongoose.connect(process.env.DATABASE_URL, { useNewURLParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.on('open', () => console.log('connected to database'));

app.post('/login', loginController.login);

app.get('/post/get', postController.getPost);
app.post('/post/create', postController.createPost);
app.put('/post/update', postController.updatePost);
app.delete('/post/delete', postController.deletePost);

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`);
});
