require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))

// ROUTES API
const reportRoutes = require('./routes/report')
app.use('/api/reports', reportRoutes)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, () => {
    console.log('Server jalan di http://localhost:3000')
})
app.use('/uploads', express.static('uploads'))