import { Router, Request, Response } from 'express'
import { Follow } from './follow.controller'
const follow = new Follow()
const router = Router()

router.post('/', (req:Request, res:Response) => {
  follow.post(req, res)
})

export { router as follow }
