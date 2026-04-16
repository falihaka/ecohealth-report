const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'ecohealth-db.c5628eymwcu7.ap-southeast-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Ecohealth123!',
    database: 'ecohealth',
    port: 3306
})

db.connect((err) => {
    if (err) {
        console.error('DB Error:', err)
    } else {
        console.log('Database connected')
    }
})

module.exports = db