import { Request, Response } from 'express'

export const register = (req: Request, res: Response) => {
  res.send('register anjay')
}

export const login = (req: Request, res: Response) => {
  res.send('anjay login')
}