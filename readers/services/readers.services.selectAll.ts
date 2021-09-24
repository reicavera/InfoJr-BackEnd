import { Request, Response } from 'express'
import { database } from '../../database'
import { cache } from '../../cache'

const cacheKey = 'readers'

const selectAll = (req:Request, res:Response) => {
  if (cache.has('readers')) {
    return res.status(200).send({
      mensagem: cache.get(cacheKey)
    })
  }

  database.query(
    'select * from readers;',
    (error: any, result: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      cache.set(cacheKey, result)
      res.status(200).send({
        mensagem: result
      })
    }
  )
}
export { selectAll }
