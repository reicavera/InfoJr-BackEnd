import { Router, Request, Response } from 'express'
import { Readers } from './readers.controller'
const readers = new Readers()
const router = Router()

router.get('/', (req:Request, res:Response) => {

})

router.get('/:id', (req:Request, res:Response) => {
  readers.getById(req, res)
})
postRequests()
putRequests()
deleteRequests()
export { router as readers }

function postRequests () {
  router.post('/', (req:Request, res:Response) => {
    readers.post(req, res)
  })
}

function putRequests () {
  router.put('/:id', (req:Request, res:Response) => {
    readers.put(req, res)
  })
}

function deleteRequests () {
  router.delete('/:id', (req:Request, res:Response) => {
    readers.delete(req, res)
  })
}
