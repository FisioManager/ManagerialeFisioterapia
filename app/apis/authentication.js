import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import User from './../models/user.model.js'

async function register(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, Number(process.env.HASH_SALT))
    
        const existingUser = await User.findOne({ email: email });
        if (existingUser) return res.status(401).json({ error: "you are already registered" });

        await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword,
        })
        res.status(200).json({ message: 'user added successfully' })
    } catch (err) {
        next(err)
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body
    
        // Find the user with specific email
        const user = await User.findOne({ email: email })
        if (!user) return res.status(401).json({ error: 'please you need to register' })

        // Compare passwords 
        const pswCorrect = await bcrypt.compare(password, user.password)
        if (!pswCorrect) return res.status(401).json({ error: 'wrong password' })
    
        const accessToken = jwt.sign(
            {
              name: user.name,
              email: user.email,
            },
            process.env.ACCESS_KEY,
            { expiresIn: '1h' }
        )

        const refreshToken = jwt.sign(
            {
              name: user.name,
              email: user.email,
            },
            process.env.ACCESS_KEY,
            { expiresIn: '7d' }
        )

        user.refreshToken = refreshToken
        await user.save()

        res.cookie('accessToken', accessToken, { httpOnly: true, domain: "localhost", path: "/api", maxAge: 60 * 60 * 1000, sameSite: "none", secure: true })
        res.cookie('refreshToken', refreshToken, { httpOnly: true, domain: "localhost", path: '/api', maxAge: 7 * 24 * 60 * 60 * 1000, sameSite: 'none', secure: true })
        res.status(200).json({ accessToken: accessToken, refreshToken: refreshToken })
    } catch (err) {
        next(err)
    }
}

export { register, login }