import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'

const cacheKey = 'posts'

const updateById = (req:Request, res:Response) => {
  const { id } = req.params
  const { title, content, authorId } = req.body
  if (!(title && content && authorId)) {
    return res.status(400).send({
      mensagem: 'um ou mais campos faltando'
    })
  }

  database.query(
    'update posts set title=?,content=?,authorId=? where id=?',
    [title, content, authorId, id],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      cache.del(cacheKey)
      res.status(200).send({
        mensagem: 'post atualizado'
      })
    }
  )
}
export { updateById }
