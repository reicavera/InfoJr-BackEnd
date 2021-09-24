import { Request, Response } from 'express'
import { database } from '../../database'

const insert = (req:Request, res:Response) => {
  const { readerEmail, authorId } = req.body
  if (!(readerEmail && authorId)) {
    ;
    return res.status(400).send({
      mensagem: 'um ou mais campos faltando'
    })
  }

  database.query(
    'insert into follow (readerEmail,authorId) values (?,?);',
    [readerEmail, authorId],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          mensagem: error
        })
      }

      res.status(201).send({
        mensagem: 'follow sucedido'
      })
    }
  )
}
export { insert }
