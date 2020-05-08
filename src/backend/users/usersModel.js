const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'The email is mandatory'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please confirm your password'],
        validate: {
            validator: function(el) {
                return el === this.password
            },
            message: 'Passwords are not the same!'
        }
    },
    name: String
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.confirmPassword = undefined;
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;