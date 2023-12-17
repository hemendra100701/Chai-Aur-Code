require('dotenv').config()
const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage

const port = 1000;
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(process.env.PORT,()=>{
    console.log(`Your server is listening on the port:${process.env.PORT}`)
})

