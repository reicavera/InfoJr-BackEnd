import { Router, Request, Response } from 'express'
import { Posts } from './posts.controller'
const posts = new Posts()
const router = Router()

getRequests()
postRequests()
putRequests()
deleteRequests()
export { router as posts }

function getRequests () {
  router.get('/', (req:Request, res:Response) => {
    posts.getAll(req, res)
  })
  router.get('/:id', (req:Request, res:Response) => {
    posts.getById(req, res)
  })
}

function postRequests () {
  router.post('/', (req:Request, res:Response) => {
    posts.post(req, res)
  })
}

function putRequests () {
  router.put('/:id', (req:Request, res:Response) => {
    posts.put(req, res)
  })
}

function deleteRequests () {
  router.delete('/:id', (req:Request, res:Response) => {
    posts.delete(req, res)
  })
}
