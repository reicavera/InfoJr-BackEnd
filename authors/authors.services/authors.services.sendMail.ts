import { Request } from 'express'
import { database } from '../../database'
import { mailAuthors } from '../../mail/mail.authors'
import { Mail } from '../../interfaces/mail'

const sendMail = (req:Request) => {
  const { id } = req.params
  database.query(
    'select follow.readerEmail,authors.authorName,readers.readerName from follow inner join authors,readers where authorId=?;',
    [id],
    (error: any, result: Mail[]) => {
      if (!error && result[0]) {
        for (const data of result) {
          mailAuthors(data)
        }
      }
    }
  )
}

export { sendMail }
