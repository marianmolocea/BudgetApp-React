const User = require('./usersModel');

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create({
            email: req.body.name,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        });
        
        res.status(201).json({
            status: "success",
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