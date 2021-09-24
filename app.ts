import { Request, Response, ErrorRequestHandler, NextFunction } from 'express'
import { authors } from './authors/authors.route'
import { readers } from './readers/readers.route'
import { follow } from './follow/follow.route'
import { posts } from './posts/posts.route'
import express = require('express')
const app = express()
bodyParser()
creatingPaths()
definingCors()
treatingError404()
treatingError500()
export { app }

function bodyParser () {
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
}

function creatingPaths () {
  app.use('/authors', authors)
  app.use('/readers', readers)
  app.use('/follow', follow)
  app.use('/posts', posts)
}

function definingCors () {
  app.use((req:Request, res:Response, next:NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
      res.header('Acces-Control-Allow-Methods', 'POST')
    }

    next()
  })
}

function treatingError404 () {
  app.use((req:Request, res:Response) => {
    const error = new Error('não encontrado')
    res.status(404).send({
      mensagem: error.message
    })
  })
}

function treatingError500 () {
  app.use((error:ErrorRequestHandler, req:Request, res:Response) => {
    res.status(500)
    return res.send({
      erro: error
    })
  })
}
