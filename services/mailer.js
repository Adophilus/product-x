import mailConfig from '@/config/mail'
import nodemailer from 'nodemailer'
import path from 'path'
import pug from 'pug'

const mailer = nodemailer.createTransport(mailConfig.transport)

mailer.use('compile', (mail, callback) => {
  mail.data.subject = pug.renderFile(
    path.join(
      mailConfig.templates.directory,
      mail.data.template,
      'subject.pug'
    ),
    mail.data.locals
  )
  mail.data.html = pug.renderFile(
    path.join(mailConfig.templates.directory, mail.data.template, 'html.pug'),
    mail.data.locals
  )
  callback()
})

export default {
  send({ to, template , locals = {}}) {
    return mailer.sendMail({
      to,
      from: mailConfig.sender,
      template,
      locals
    })
  }
}
