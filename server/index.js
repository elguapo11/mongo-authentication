const express = require("express");
const app = express();
require("dotenv").config();
const { PORT } = process.env;

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
