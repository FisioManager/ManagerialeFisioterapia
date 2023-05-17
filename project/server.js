import express from 'express'
import mongoose from 'mongoose'
import { config } from 'dotenv'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import apiRouter from './api/apiRoutes'

const __root = dirname(fileURLToPath(import.meta.url)) 
const __publicPath = join(__root, 'public')

// Create the server on port 3000
const app = express()
const port = 3000

// Specifing that express will handle JSON responses by default
app.use(express.json())

// Middleware that try to serve files inside the public folder automatically without any app.get() for each one of them
app.use(express.static('public'))

// Handle api calls by passing them to the router apiRoutes defined inside apiRoutes.js
app.use('/api', apiRouter)

// Config the .env environment
config()

// Connect to the database
mongoose.connect(process.env.MONGO_URI).then(() => console.log('Server is connected to the database'))

// Set the MIME type explicitly
express.static.mime.define({ 'text/javascript': ['js'] })

app.listen(port, (error) => {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})

// Serve every route with index.html since this is handeled by React
app.get('/*', (req, res) => { res.sendFile(join(__publicPath, 'index.html') ) })
