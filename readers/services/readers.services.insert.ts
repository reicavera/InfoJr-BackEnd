import { Request, Response } from 'express'
import { database } from '../../database'

const insert = (req:Request, res:Response) => {
  const { name, email } = req.body
  if (!(name && email)) {
    res.status(400).send({
      mensagem: 'um ou mais campos faltando'
    })
  }

  database.query(
    'select id from readers where email=?',
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
    }
  )
  database.query(
    'insert into readers (readerName,email) values (?,?)',
    [name, email],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      res.status(201).send({
        mensagem: 'leitor cadastrado com sucesso'
      })
    }
  )
}
export { insert }
