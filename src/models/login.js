const conn = require('../config/db')

module.exports = {
    register: (data) => {
        return new Promise((resolve, reject) => {
            conn.query(`INSERT INTO users SET ?`, data, (err, result) => {
                if (!err) {
                    conn.query(`INSERT INTO score SET ?`, {idUser : result.insertId, score : 0})
                    console.log(result);
                    resolve(result)
                } else {
                    console.log(err);
                     reject(err)
                }
            })
        })
    },
    getByEmail: (email) => {
        return new Promise((resolve, reject) => {
            conn.query(`SELECT users.idUser,image, idCard , email, fullName,role, created_at, updated_at, salt, password, score.score FROM users INNER JOIN score ON users.idUser = score.idUser WHERE email = ?`,email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(err)
                }
            })
        })

    }
}