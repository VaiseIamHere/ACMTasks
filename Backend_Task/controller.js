const blog = require('./blogDataScheme.js')

const general = (req, res) => {
    res.send("Heyy server is Listening !!<br>Test API's for Blog")
}

const createBlog = async (req, res) => {
    existing = await blog.find({"blogname": req.body.blogname})
    console.log(existing, req.body.blogname, existing == [], [].length)
    if(existing.length == 0){
        try{
            temp = await blog.create(req.body)
            res.status(200).json(temp)
        }
        catch(err){
            console.log(err.message)
            res.status(500).json({"Error": err.message})
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
        console.log(err.message)
        res.status(500).json({"Error": err.message})
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
        console.log(err.message)
        res.status(500).json({"Error": err.message})
    }
}

const updateBlog = async (req, res) => {
    try{
        blogname = req.params.blogname
        temp = await blog.findOneAndUpdate({blogname}, req.body, {new: true})
        res.status(200).json(temp)
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({"Error": err.message})
    }
}

const deleteBlog = async (req, res) => {
    try{
        blogname = req.params.blogname
        console.log(await blog.deleteMany({"blogname": blogname}))
        // await blog.deleteMany({"blogname": blogname})
        res.send("Blog deleted sucessfully !!")
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({"Error": err.message})
    }
}

const deleteAll = async (req, res) => {
    try{
        await blog.deleteMany({})
        res.status(200).send("All the blog posts deleted !!")
    }
    catch(err){
        console.log(err.message)
        res.status(500).json({"Error": err.message})
    }
}
module.exports = {
    general,
    createBlog,
    viewAllBlog,
    viewBlog,
    updateBlog,
    deleteBlog,
    deleteAll
}