const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username:{
            type: String,
            required: [true, "Provide username"]
        },
        email:{
            type: String,
            required: [true, "Provide Email"]
        },
        password:{
            type: String,
            required: [true, "Provide Password"]
        }
    },
    {
        timestamps: true
    }
)

const usermodel = mongoose.model("usermodel", userSchema)

module.exports = usermodel