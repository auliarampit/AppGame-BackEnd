const express = require('express')
const Route = express.Router()


const scoreController = require('../controllers/score')


Route
    .get('/', scoreController.score)
    .patch('/patch/:idUser', scoreController.patchScore)

module.exports = Route