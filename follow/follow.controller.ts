import { Request, Response } from 'express'
import { insert } from './follow.services/follow.services.insert'

class Follow {
  post (req:Request, res: Response) {
    insert(req, res)
  }
}
export { Follow }
