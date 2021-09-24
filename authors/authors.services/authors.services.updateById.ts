import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'

const cacheKey = 'posts'

const updateById = (req:Request, res:Response) => {
  const { id } = req.params
  const { name, email } = req.body
  if (email) {
    return res.status(400).send({
      mensagem: 'é permitido mudar apenas o campo nome'
    })
  }

  if (!name) {
    return res.status(400).send({
      mensagem: 'campo nome faltando'
    })
  }

  database.query(
    'update authors set authorName=? where id=?',
    [name, id],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      cache.del(cacheKey)
      res.status(200).send({
        mensagem: 'autor atualizado'
      })
    }
  )
}
export { updateById }
