import Email from 'email-templates'
import mailConfig from '@/config/mail'

export default new Email({
  message: {
  from: 'admin@product-x.localhost'
  },
  send: true,
  transport: mailConfig
})
