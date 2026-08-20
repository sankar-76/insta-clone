const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
      type:"string",
      uniqu:[true, "User name alredy exists"],
      required : [true,"User name is required"]
    },
    email: {
      type: String,
      unique:[true, "Email alredy exists"],
      required: [true, "Email is required"]
    },
    password:{
      type:String,
      required:[true,"password is required"]
    }, bio:String,
    profileImage:{
      type:String,
      default:"https://ik.imagekit.io/oqbdprtxx/profile.webp"
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel