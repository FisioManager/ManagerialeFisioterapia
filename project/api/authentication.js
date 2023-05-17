import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from './models/user.model.js'

async function register(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body
      const hashedPassword = await bcrypt.hash(password, Number(process.env.HASH_SALT))
  
      await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hashedPassword,
      })
      res.status(200).json('user added successfully')
    } catch (err) {
      res.status(500).json(err)
    }
}

async function login(req, res) {
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
  
        return res.status(200).json({token: token })
      } else {
        return res.status(400).json({token: false })
      }
    } catch (err) {
      res.status(500).json({error: 'TODO: handle error' })
    }
}
  
export { register, login }