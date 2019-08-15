const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'phpmyadmin',
    password : 'root',
    database : 'appagme'
})

conn.connect((err) => {
    if (err) console.log(new Error(err))
})

module.exports = conn