import { Request, Response } from 'express'
import User from '../db/models/user'

export const register = async (req: Request, res: Response) => {
  const user = await User.build({
    username: req.body.username,
    password: req.body.password,
    role: 'member'
  }).save()

  res.send(user.username + ' registered successfully!')
}

export const login = (req: Request, res: Response) => {
  res.send('anjay login')
}
