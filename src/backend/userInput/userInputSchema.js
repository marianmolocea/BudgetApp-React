const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    inputName: {
        type: String,
        required: [true, 'The input must have a name']
    },
    inputValue: {
        type: Number,
        required: [true, 'The input must have a value']
    }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;