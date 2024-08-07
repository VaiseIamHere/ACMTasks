const mongoose = require('mongoose')

const blogSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: true
        },
        blogname:{
            type: String,
            required: [true, "Please Provide name of the new Blog"],
        },
        content:{
            type: String,
            required: [true, "Please Provide content of the new Blog"]
        },
        about:{
            type: String,
            required: false,
            default: "About section not Added."
        }
    },
    {
        timestamps: true
    }
)

const blog = mongoose.model("Blog",blogSchema)

module.exports = blog