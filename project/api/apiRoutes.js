import express from 'express'

const apiRouter = express.Router()

import { register, login } from './authentication.js'

// Authentication
apiRouter.post('/register', register);
apiRouter.post('/login', login);

export default apiRouter