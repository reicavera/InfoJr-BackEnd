import { Request } from 'express'
import { database } from '../../database'

const deleteByAuthorId = (req:Request) => {
  const { id } = req.params
  database.query(
    'delete from follow where authorId=?;',
    [id]
  )
}
export { deleteByAuthorId }
