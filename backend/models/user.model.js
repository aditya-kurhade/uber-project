const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            requried: true,
            minlength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Last name must be at least 3 characters long'],
        }
    },
    email: {
        type: String,
        reuired: true,
        unique: true,
        minlength: [5, 'Last name must be at least 5 characters long'],
    },
    password: {
        type: String,
        reuired: true,
        select: false,
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "24h"})
    return token;
}

userSchema.methods.comparePassword = async function () {
    return await bcrypt.compare(password, this.password)
}

userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("user" , userSchema)

module.exports = userModel;