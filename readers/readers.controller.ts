import { Request, Response } from 'express'
import { selectAll } from './services/readers.services.selectAll'
import { selectById } from './services/readers.services.selectById'
import { insert } from './services/readers.services.insert'
import { updateById } from './services/readers.services.updateById'
import { deleteById } from './services/readers.services.deleteById'

class Readers {
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
    deleteById(req, res)
  }
}
export { Readers }
