import express from 'express'
import routes from './src/routes/routes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()
const PORT = 4000

// Mongoose connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/patientDB' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Body parser setup
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) => 
    res.send(`Node and server running on port ${PORT}`)
)

app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}/`)
)