import { Request, Response } from 'express'
import { selectAll } from './posts.services/posts.services.selectAll'
import { selectById } from './posts.services/posts.services.selectById'
import { insert } from './posts.services/posts.services.insert'
import { sendMail } from './posts.services/posts.services.sendMail'
import { updateById } from './posts.services/posts.services.updateById'
import { deleteById } from './posts.services/posts.services.deleteById'

class Posts {
  getAll (req:Request, res: Response) {
    selectAll(req, res)
  }

  getById (req:Request, res: Response) {
    selectById(req, res)
  }

  post (req:Request, res: Response) {
    insert(req, res)
    sendMail(req)
  }

  put (req:Request, res: Response) {
    updateById(req, res)
  }

  delete (req:Request, res: Response) {
    deleteById(req, res)
  }
}
export { Posts }
