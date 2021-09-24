import { Request, Response } from 'express'
import { database } from '../../database'

const updateById = (req:Request, res:Response) => {
  const { email, name } = req.body
  const id = req.params.id
  if (!email) {
    return res.status(400).send({
      mensagem: 'é permitido mudar apenas o campo nome'
    })
  }

  if (name) {
    res.status(400).send({
      mensagem: 'campo nome faltando'
    })
  }

  database.query(
    'update readers set readerName=? where id=?',
    [name, id],
    (error: any) => {
      if (error) {
        return res.status(500).send({
          error,
          response: null
        })
      }

      res.status(200).send({
        mensagem: 'leitor atualizado'
      })
    }
  )
}
export { updateById }
