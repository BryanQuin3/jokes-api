const express = require('express')
const configMongoose = require('./configuracion/mongoose.config')
const jokesRoutes = require('./rutas/jokes.routes')
// initialize express app
const app = express()
const port = 8000

// configure mongoose to connect to database
configMongoose()

// configure express to parse POST body data as JSON
app.use(express.json())

// configure routes
jokesRoutes(app)

// listen on port 8000 for incoming requests
app.listen(port, () => console.log(`Listening on port ${port}`))
