const model = require('../models/score')
const MiscHelper = require('../helpers/status')


module.exports = {
    score: (req, res) => {

        model.score()
        .then((resultScore) => {
         res.json(resultScore)
        })
        .catch((error) => {
            console.log(error)
        })
    },
    patchScore: (req, res) => {
        const idUser = req.params.idUser
        const score = req.body.score

        model.patchScore(idUser, score)
        .then((resultScore) => {
         res.json(resultScore)
        })
        .catch((error) => {
            console.log(error)
        })
    }
}