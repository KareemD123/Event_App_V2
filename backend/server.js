// Import Express Library
const express = require('express')
//Import Body Parser
const bodyParser = require('body-parser')
// Import CORS
const cors = require('cors')
// Import router
const eventRouter = require('./routes/event')

// Initializing Express App 
const app = express() // Invoking the Express Function ---> returns an App object
// Export our app
module.exports = app

app.use(bodyParser.json())
app.use(cors())

// Register our eventRouter at the / route
app.use('/', eventRouter)

// Creating an endpoint for GET /hello
app.get('/hello', (request, response) => {
    response.send('Hello World !!!')
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})

