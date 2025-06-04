const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const captainSchema = new mongoose.Schema({
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
    },
    
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive"  
    },

    vehicle:{
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be at least 3 characters long'],
        },
        plate:{
            type: String,
            requried: true,
            minlength: [3, 'Plate must be at least 3 characters long'],
        },
        capacity: {
            type: Number,
            requried: true,
            min: [1,"Capacity must be at least 1 "]
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ["car", "motorcycle", "auto"],
        },
        location: {
            lat: {
                type : Number,
            },
            lng: {
                type: Number,
            }
        }

    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: "24h"})
    return token;
}

captainSchema.methods.comparePassword = async function () {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("captain" , captainSchema)

module.exports = captainModel;
