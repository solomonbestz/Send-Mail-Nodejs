const express = require('express')
const appRoutes = require('./routes/routes.js')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

// routes
app.use('/api', appRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})