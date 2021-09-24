import { config } from '../config/smpt'
import { Mail } from '../interfaces/mail'
import * as nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: config.host,
  port: config.port,
  auth: {
    user: config.user,
    pass: config.pass
  },
  tls: { rejectUnauthorized: false }
})

const mailPosts = async (mail: Mail) => {
  const { readerEmail, readerName, authorName } = mail
  sender.sendMail({
    from: config.user,
    to: readerEmail,
    subject: 'atividade 8',
    text: 'Olá, ' + readerName + '. O autor ' + authorName + ' acabou de fazer um post novo. Que tal dar uma olhada?'
  })
}
export { mailPosts }
