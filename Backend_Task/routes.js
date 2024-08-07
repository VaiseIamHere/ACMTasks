// File to handle all the routes and perform necessary CRUD operation using 'controller.js'

const express = require('express')
const blog = require('./blogDataScheme.js')
const controller = require('./controller.js')
const route = express.Router()

route.get('/', controller.general)

route.post('/post', controller.createBlog)

route.get('/view', controller.viewAllBlog)

route.get('/view/:blogname', controller.viewBlog)

route.put('/update/:blogname', controller.updateBlog)

route.delete('/delete/:blogname' ,controller.deleteBlog)

route.delete('/clear', controller.deleteAll)


// Routes for Authentication

route.post('/register', controller.registerUser)

module.exports = route