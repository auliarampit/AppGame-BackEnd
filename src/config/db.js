const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'remotemysql.com',
    user : 'GgVdNuxPlA',
    password : 'YZ6xkELZfF',
    database : 'GgVdNuxPlA'
})

conn.connect((err) => {
    if (err) console.log(new Error(err))
})

module.exports = conn