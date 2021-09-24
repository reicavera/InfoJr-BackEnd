import { Request } from 'express'
import { database } from '../../database'
import { mailPosts } from '../../mail/mail.posts'
import { Mail } from '../../interfaces/mail'

const sendMail = (req:Request) => {
  const { authorId } = req.body
  database.query(
    'select follow.readerEmail,authors.authorName,readers.readerName from follow inner join authors,readers where authorId=?;',
    [authorId],
    (error: any, result: Mail[]) => {
      if (error) {
        return
      }

      for (const data of result) {
        mailPosts(data)
      }
    }
  )
}

export { sendMail }
