import { Router, Request, Response } from 'express'
import { Authors } from './authors.controller'
const authors = new Authors()
const router = Router()

router.get('/', (req: Request, res: Response) => {
  authors.getAll(req, res)
})

router.get('/:id', (req:Request, res:Response) => {
  authors.getById(req, res)
})

router.post('/', (req:Request, res:Response) => {
  authors.post(req, res)
})

router.put('/:id', (req:Request, res:Response) => {
  authors.put(req, res)
})

router.delete('/:id', (req:Request, res:Response) => {
  authors.delete(req, res)
})

export { router as authors }
