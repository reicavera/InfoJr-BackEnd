import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'

const cacheKey = 'posts'

const deleteById = (req:Request, res:Response) => {
  const { id } = req.params
  database.query(
    'delete from posts where id=?;',
    [id],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      cache.del(cacheKey)
      res.status(204).send()
    }
  )
}
export { deleteById }
