import mailConfig from '@/config/mail'
import jwtConfig from '@/config/jwt'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig()

export default {
  secret: serverRuntimeConfig.secret,
  jwt: jwtConfig,
  mail: mailConfig
}
