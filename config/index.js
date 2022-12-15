import mailConfig from '@/config/mail'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default {
  secret: serverRuntimeConfig.secret,
  mail: mailConfig
}
