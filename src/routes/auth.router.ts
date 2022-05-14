import { Router } from 'express'
import { body } from 'express-validator'
import { register, login } from '../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/register', () => {
  body('username').isString()
  body('password').isLength({ min: 8 })
}, register)

authRouter.post('/login', () => {
  body('username').isString()
  body('password').isLength({ min: 8 })
}, login)

export default authRouter
