const fs = require('fs');
const path = require('path')
const inputData = require(`../../data/inputData.json`);
const Item = require('./userInputSchema')

exports.createNewItem = async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                item: newItem,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }

}

exports.getAllItems = (req, res) => {
    req.header('Content-Type: application/json')
    res.send(inputData.items)
}