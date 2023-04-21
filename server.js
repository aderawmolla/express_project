const express=require('express')
const { json } = require('express/lib/response')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT||5000
app.listen(port,(req,res)=>{
  console.log(`server running on port ${port}`)
})
app.use(express.json())
app.use('/api/contacts',require('./routes/contactRoutes'))