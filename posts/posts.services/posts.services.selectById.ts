import { Request, Response } from 'express'
import { database } from '../../database'

const selectById = (req:Request, res:Response) => {
  const { id } = req.params
  database.query(
    'select * from posts where id=?;',
    [id],
    (error: any, result: any[]) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      if (!result[0]) {
        return res.status(404).send({
          mensagem: 'post não encontrado'
        })
      }

      res.status(200).send({
        mensagem: result
      })
    }
  )
}
export { selectById }
