import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'
const cacheKey = 'posts'

const insert = (req:Request, res:Response) => {
  const { name, email } = req.body
  if (!(name && email)) {
    res.status(400).send({
      mensagem: 'um ou mais campos faltando'
    })
  }

  database.query(
    'select id from authors where email=?',
    [email],
    (error: any, result: any[]) => {
      if (error) {
        return res.status(500).send({
          mensagem: error
        })
      }

      if (result[0]) {
        return res.status(400).send({
          mensagem: 'email já cadastrado'
        })
      }
    })

  database.query(
    'insert into authors (authorName,email) values (?,?)',
    [name, email],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      cache.del(cacheKey)
      res.status(201).send({
        mensagem: 'autor cadastrado com sucesso'
      })
    }
  )
}

export { insert }
