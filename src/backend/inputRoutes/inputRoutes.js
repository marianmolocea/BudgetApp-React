const express = require('express');
const userInputHandler = require('../userInput/userInputHandler')

const router = express.Router();

router
    .route('/')
    .get(userInputHandler.getAllItems)
    .post(userInputHandler.createNewItem);

router
    .route('/:id')
    .get(userInputHandler.getItem)
    .patch(userInputHandler.updateItem)
    .delete( userInputHandler.deleteItem);

module.exports = router