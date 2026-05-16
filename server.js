const express = require('express')
const cors = require('cors')

const app = express()
const port = 3000 || process.env.port

// middleware FIRST
app.use(cors())
app.use(express.json())

//  routes
const insertstudent = require('./Routes/insertstudent')
app.use('/insertstudent', insertstudent)

//  listen LAST
app.listen(port, () => {
    console.log("Server is running on port 3000")
})
app.get('/', (req, res) => {
    res.send("Backend is running successfully")
})