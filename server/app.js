//Importing modules

const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

//App
const app = express()



//Db setup
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log('DB ping sent and successfully connected'))
.catch(err => console.log(`DB connection error`, err))

//static files setup using express


//middleware

app.use(morgan('dev'))
app.use(cors({origin: true, credentials: "true"}))


//routes
const testRoutes = require("./routes/test")
app.use('/', testRoutes)

//port

const port  = process.env.PORT || 5000

//listen to events
const server = app.listen(port, () => {
    console.log(`Server for backend is running on port  ${port}`)
})