const express = require('express');
const inputsHandler = require('../Inputs/InputsHandler')

const router = express.Router();

router
    .route('/')
    .get(inputsHandler.getAllItems)
    .post(inputsHandler.createNewItem);

router
    .route('/:id')
    .get(inputsHandler.getItem)
    .patch(inputsHandler.updateItem)
    .delete( inputsHandler.deleteItem);

module.exports = router