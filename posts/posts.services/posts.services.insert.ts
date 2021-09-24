import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'
const cacheKey = 'posts'

const insert = (req:Request, res:Response) => {
  const { title, content, authorId } = req.body
  if (!(title && content && authorId)) {
    return res.status(400).send({
      mensagem: 'um ou mais campos faltando'
    })
  }

  database.query(
    'insert into posts (title,content,authorId) values (?,?,?)',
    [title, content, authorId],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }
      cache.del(cacheKey)
      res.status(201).send({
        mensagem: 'post cadastrado com sucesso'
      })
    }
  )
}

export { insert }
