import { Request, Response } from 'express'
import { selectAll } from './authors.services/authors.services.selectAll'
import { selectById } from './authors.services/authors.services.selectById'
import { insert } from './authors.services/authors.services.insert'
import { sendMail } from '../authors/authors.services/authors.services.sendMail'
import { updateById } from './authors.services/authors.services.updateById'
import { deleteById } from './authors.services/authors.services.deleteById'
import { deleteByAuthorId } from './authors.services/authors.services.deleteFollowByAuthorId'

class Authors {
  getAll (req:Request, res: Response) {
    selectAll(req, res)
  }

  getById (req:Request, res: Response) {
    selectById(req, res)
  }

  post (req:Request, res: Response) {
    insert(req, res)
  }

  put (req:Request, res: Response) {
    updateById(req, res)
  }

  delete (req:Request, res: Response) {
    sendMail(req)
    deleteByAuthorId(req)
    deleteById(req, res)
  }
}
export { Authors }
