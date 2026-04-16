const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    // host: 'endpoint-rds.amazonaws.com',
    user: 'root',
    password: '',
    database: 'ecohealth'
})

db.connect((err) => {
    if (err) {
        console.error('DB Error:', err)
    } else {
        console.log('Database connected')
    }
})

module.exports = db
