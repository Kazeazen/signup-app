const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routerUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

// DB Connection
const db = mongoose.connection;
mongoose.connect(process.env.DATABASE_ACCESS, {useNewUrlParser: true});
db.once('open', () => {
    console.log("Db Connection successful.")
})
db.on('error', console.error.bind(console, 'MongoDB Connection Error'))

// Middleware inits
app.use(express.json())
app.use(cors())
app.use('/app', routerUrls)

app.listen(4000, () => {
    console.log("Running on port 4000")
})