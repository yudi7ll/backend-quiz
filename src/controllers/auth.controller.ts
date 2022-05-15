import { hashSync } from 'bcrypt'
import { Request, Response } from 'express'
import User from '../db/models/user'

export const register = async (req: Request, res: Response) => {
  const user = await User.create({
    username: req.body.username,
    password: hashSync(req.body.password, 10),
    role: 'member'
  })

  res.json(user)
}

export const login = (req: Request, res: Response) => {
  //
}

export default { register, login }
