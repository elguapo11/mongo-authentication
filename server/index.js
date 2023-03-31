require('dotenv').config()
const express = require('express')
const app = express()
const { PORT } = process.env;
const mongoose = require('mongoose')



mongoose.connect(process.env.DATABASE_URL, {useNewURLParser:true})
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.on('open', () => console.log('connected to database'))

app.get('/', (req, res) => {
  res.send('WELCOME TO MY SERVER!')
})

app.listen(PORT, () => {
  console.log(`My server is running on ${PORT}`)
})

