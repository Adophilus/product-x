import User from '@/models/User'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import config from '@/config'
import email from '@/services/email'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const link = LoginLink.create()
      email.send({
        template: 'login',
        message: {
          to: req.body.email
        },
        locals: link
      })
      break
    case 'PATCH':
      const user = await User.findOne({ email: req.body.email })
      if (!user)
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send(ReasonPhrases.UNAUTHORIZED)
      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: '7d'
      })
      return res.status(StatusCodes.OK).send({ token })
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send(ReasonPhrases.METHOD_NOT_ALLOWED)
  }
}
