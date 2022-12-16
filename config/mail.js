import * as dotenv from 'dotenv'

dotenv.config()

export default {
  sender: process.env.MAIL_SENDER,
  templates: {
    directory: './emails'
  },
  transport: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    ssl: false,
    tls: true,
    auth: {
      user: process.env.MAIL_USER_NAME,
      pass: process.env.MAIL_USER_PASS
    }
  }
}
