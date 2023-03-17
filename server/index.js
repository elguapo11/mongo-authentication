const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;
const mongoose = require('mongoose');



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/databases", (req, res) => {
  console.log("testing when I hit the endpoint");
  res.send('You have hit the endpoint')
});

app.listen(PORT, () => {
  console.log(`My site listening on port ${PORT}`);
});

main().catch(err => console.log(err));

const kittySchema = new mongoose.Schema({
  name: String
});


kittySchema.methods.speak = function speak() {
  const greeting = this.name
    ? 'Meow name is ' + this.name
    : 'I don\'t have a name';
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);



async function main() {
  await mongoose.connect('mongodb://localhost/3000')}
  const db = mongoose.connection
  db.on('error', (error) => console.log(error))
  db.on('connected',() => console.log('connected to db'))

const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

const fluffy = new Kitten({ name: 'fluffy' });
  

fluffy.speak(); // "Meow name is fluffy"



