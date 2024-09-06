require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bioTextRoutes = require('./routes/bioText')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//connect to db
mongoose.connect(process.env.MONG_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log('connected to db and listening to PORT', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

//routes
app.use('/api/bioText', bioTextRoutes)