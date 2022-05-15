import { Router } from 'express'
import { check } from 'express-validator'
import authController from '../controllers/auth.controller'
import User from '../db/models/user'
import verifyValidation from '../middleware/verify-validation'

const authRouter = Router()

authRouter.post('/register',
  check('username')
    .isString()
    .withMessage('The username is required and should be unique')
    .custom(async (value) => {
      const data = await User.findOne({ where: { username: value } })
      if (data) {
        return Promise.reject('Username already taken')
      }
    }),
  check('password')
    .isLength({ min: 8 })
    .withMessage('The password field is minimum 8 character'),
  verifyValidation,
  authController.register
)
authRouter.post('/login',
  check('username').isString(),
  check('password').isLength({ min: 8 }).withMessage('minimum 8 character'),
  verifyValidation,
  authController.login
)

export default authRouter
