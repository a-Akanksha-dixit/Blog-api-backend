require('dotenv').config()

// async errors
require('express-async-errors')
const express = require('express')
const cors = require('cors')
const app = express()

const connectDb = require('./src/Database/connect')

// middlewares
const notFound = require('./src/Middlewares/notFound')
const errorHandlerMiddleware = require('./src/Middlewares/errorHandlerMiddleware')
const authentication = require('./src/Middlewares/authentication')
const {loadAclRules} = require('./src/Services/acl.Service')
const routes = require('./src/Routes/index.Route');
const acl = require('express-acl')

app.use(express.json(), cors())

/** not protected home route */
app.get('/', (req, res) => {
    res.send('Home page')
})
// /** admin role routes */
// const grantlessRoute = require('./src/Routes/grantless.Route')
// app.use('/app', grantlessRoute)

// authenticate before handling requests
app.use(authentication)
app.use(loadAclRules)
app.use(acl.authorize)

app.use(routes)

// route not found middleware
app.use(notFound)

// error handle middleware
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || 3000

const start = async() => {
    try {
        console.log('..connecting database');
        await connectDb(process.env.MONGODB_URI)
        console.log('database is connected')
        app.listen(PORT, () => {
            console.log(`server is running at ${PORT}`);
        })
    } catch(error) {
        console.log(error)
    }
}

start()








