import express from 'express'

const apiRouter = express.Router()

import { register, login } from './authentication'

// Authentication
apiRouter.post('/register', register);
apiRouter.post('/login', login);

export default apiRouter