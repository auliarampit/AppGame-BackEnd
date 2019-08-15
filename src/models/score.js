const conn = require('../config/db')

module.exports = {
    score: () => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT users.fullName, score.score FROM users INNER JOIN score ON score.idUser = users.idUser `,  (err, result) => {
                if (!err) {
                    console.log(result);
                    resolve(result)
                } else {
                    console.log(err);
                     reject(err)
                }
            })
        })
    },
    patchScore: (idUser, score) => {
        return new Promise((resolve, reject) => {
            conn.query(`UPDATE score SET ? WHERE idUser = ? `,[{score:score},idUser],  (err, result) => {
                if (!err) {
                    console.log(result);
                    resolve(result)
                } else {
                    console.log(err);
                     reject(err)
                }
            })
        })
    },
}