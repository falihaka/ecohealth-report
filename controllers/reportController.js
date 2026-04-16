const db = require('../config/db')

// CREATE REPORT
exports.createReport = (req, res) => {
    const { title, description, location } = req.body

    const image = req.file ? req.file.location : null

    const sql = `
        INSERT INTO reports (title, description, location, image_url)
        VALUES (?, ?, ?, ?)
    `

    db.query(sql, [title, description, location, image], (err, result) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Gagal simpan data' })
        }

        res.json({
            message: 'Berhasil',
            data: result
        })
    })
}

// GET ALL REPORTS
exports.getReports = (req, res) => {
    db.query('SELECT * FROM reports', (err, results) => {
        if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Gagal ambil data' })
        }

        res.json(results)
    })
}