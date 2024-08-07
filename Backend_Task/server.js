// <-------------------------- You are in the server -------------------------->

// Importing necessary Things to create Server
const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes.js')
const app = express()
const PORT = 6969

// middlewares
app.use(express.json())

// routes
app.use('/',route)

// Connecting to Database
mongoose.connect("mongodb+srv://singhvaibhav12062005:6hiyUsSZutje1LGj@backendforblog.mh9bml1.mongodb.net/?retryWrites=true&w=majority&appName=BackendForBlog")
.then(()=>{
    console.log("Connected to Database.")
    // Starting the Server if connected to Database
    app.listen(PORT, () => {
        console.log(`Server started and Listening at: http://localhost:${PORT}`)
    })
})
.catch(()=>{
    console.log("Connection to Database Failed !!")
})
