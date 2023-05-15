import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { config } from 'dotenv'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import User from './src/models/user.model.js'

const __root = dirname(fileURLToPath(import.meta.url)) 
const __publicPath = join(__root, 'public')

// Create the server on port 3000
const app = express()
const port = 3000

// Specifing that express will handle JSON responses by default
app.use(express.json())

// Middleware that try to serve files inside the public folder automatically without any app.get() for each one of them
app.use(express.static('public'))

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

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, Number(process.env.HASH_SALT))

    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    })
    res.status(200).json('user added successfully')
  } catch (err) {
    res.status(500).json(err)
  }
})

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Find the user with specific email
    const user = await User.findOne({
      email: email
    })

    // Compare passwords 
    const result = await bcrypt.compare(password, user.password)

    // If passwords don't match then stop
    if (!result)
      return res.status(400).json({error: 'TODO: handle wrong password'})

    if (user) {
      const token = jwt.sign(
        {
          name: user.name,
          email: user.email,
        },
        process.env.ACCESS_KEY,
        { expiresIn: '1h' }
      )

      return res.status(200).json({user: token })
    } else {
      return res.status(400).json({user: false })
    }
  } catch (err) {
    res.status(500).json({error: 'TODO: handle error' })
  }
})
