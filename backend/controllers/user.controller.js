//route logic are writen in controllers
const userModel = require("../models/user.model")
const userServices = require("../services/user.service")
const { validationResult } = require("express-validator")


module.exports.registerUser = async(res,req,next) => {
    const errors = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error: errors.array()});
    }

    const {fullname, email, password} = req.body;

    const hashedpassword = await userModel.hashpassword(password);

    const user = await userServices.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedpassword,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user});
}