const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 20,
    user: "admin",
    password: "Amex618753",
    host: "databaseamazonb.cj6dgqkguxl3.us-east-2.rds.amazonaws.com",
    port: 3306,
    database: "myamazon",
    timezone: 'utc'
})



module.exports = { pool }