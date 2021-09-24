import { Request, Response } from 'express'
import { database } from '../../database'

const deleteById = (req:Request, res:Response) => {
  const { id } = req.params
  database.query(
    'delete from readers where id=?;',
    [id],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      res.status(204).send()
    }
  )
}
export { deleteById }
