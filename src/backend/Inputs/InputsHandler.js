const Item = require('./InputsSchema')

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

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find()
        res.status(200).json({
            status: "success",
            data: {
                items,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id)
        res.status(200).json({
            status: "success",
            data: {
                item,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}

exports.updateItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: "success",
            data: {
                item,
            }
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}

exports.deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: "success",
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err
        })
    }
}