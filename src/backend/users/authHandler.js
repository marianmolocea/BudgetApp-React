const User = require('./usersModel');
const jwt = require('jsonwebtoken');
const AppError = require('../appError')

const signToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
};

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });

        const token = signToken(newUser._id);

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

/* exports.logIn = async (req, res, next) => {
    try {
        const {email, password} = req.body;
    
        if(!email || !password) {
            return next(new AppError('Please provide the user and password', 400))
        };
        const user = await User.findOne({email}).select('+password');;
               
        if(!user || !(await user.correctPassword(password, user.password))) {
            return next(new AppError('Incorrect email or password', 401))
        }

        const token = signToken(user._id)
        res.status(200).json({
            status: 'success',
            token
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
} */