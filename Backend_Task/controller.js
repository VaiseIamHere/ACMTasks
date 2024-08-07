const blog = require('./blogDataScheme.js')
const user = require('./userSchema.js')

// Error Function
const errorDetected = async (res, err) =>{
    console.log(err.message)
    res.status(500).json({"Error": err.message})
}

// Handler Functions
const general = (req, res) => {
    res.send("Heyy server is Listening !!<br>Test API's for Blog")
}

const createBlog = async (req, res) => {
    existing = await blog.find({"blogname": req.body.blogname})
    if(existing.length == 0){
        try{
            temp = await blog.create(req.body)
            res.status(200).json(temp)
        }
        catch(err){
            errorDetected(res, err)
        }
    }
    else{
        res.status(200).send("Blog with same name already exists !!")
    }
}

const viewAllBlog = async (req, res) => {
    try{
        temp = await blog.find({})
        res.status(200).json(temp)
    }
    catch(err){
        errorDetected(res, err)
    }
}

const viewBlog = async (req, res) => {
    try{
        blogname = req.params.blogname
        temp = await blog.find({"blogname": blogname})
        if(temp.length == 0){
            res.status(200).json({0: `Cannot Find any blog with name '${blogname}'...`})
        }
        else{
            res.status(200).json(temp)
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const updateBlog = async (req, res) => {
    try{
        blogname = req.params.blogname
        check = !req.body.hasOwnProperty("blogname")
        if(check){
            temp = await blog.findOneAndUpdate({blogname}, req.body, {new: true})
            res.status(200).json(temp)
        }
        else{
            res.send("Cannot Update Blogname !!!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const deleteBlog = async (req, res) => {
    try{
        blogname = req.params.blogname
        check = await blog.deleteMany({"blogname": blogname})
        if(check.deletedCount > 0){
            res.send("Blog deleted sucessfully !!")
        }
        else{
            res.send("Blog do not exits or Deleted Earlier !!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
}

const deleteAll = async (req, res) => {
    try{
        await blog.deleteMany({})
        res.status(200).send("All the blog posts deleted !!")
    }
    catch(err){
        errorDetected(res, err)
    }
}

const registerUser = async (req, res) => {
    try{
        temp = await user.find({"username": req.body.username, "email": req.body.email})
        if(temp.length == 0){
            tempuser = await user.create(req.body)
            res.status(200).json(tempuser)
        }
        else{
            res.send("User already exists !!!")
        }
    }
    catch(err){
        errorDetected(res, err)
    }
        
}

module.exports = {
    general,
    createBlog,
    viewAllBlog,
    viewBlog,
    updateBlog,
    deleteBlog,
    deleteAll,
    registerUser
}