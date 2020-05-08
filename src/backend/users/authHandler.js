const User = require('./usersModel');
const jwt = require('jsonwebtoken');
const AppError = require('../appError')

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });

        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        });
        res.status(201).json({
            status: "success",
            token,
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.logIn = (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
        return next(new AppError('Please provide the user and password', 400))
    };
    
    const token = ''
    res.status(200).json({
        status: 'success',
        token
    })
}