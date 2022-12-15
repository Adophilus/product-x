import * as dotenv from 'dotenv'

dotenv.config()

export default {
  secret: process.env.JWT_SECRET,
  options: {
    expiresIn: '7d'
  }
}
