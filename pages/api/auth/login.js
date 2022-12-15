import User from '@/models/User'
import LoginLink from '@/models/LoginLink'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import absoluteUrl from 'next-absolute-url'
import config from '@/config'
import mailer from '@/services/mailer'

export default async function handler(req, res) {
  let user
  let loginLink

  switch (req.method) {
    case 'GET':
      const { key } = req.query
      loginLink = await LoginLink.findOne({ where: { id: key } })
      console.log(loginLink.user)
      return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
    case 'POST':
      user = await User.findOne({ where: { email: req.body.email } })
      if (!user) return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
      const { origin } = absoluteUrl(req)
      loginLink = await LoginLink.create({ user: user.email })
      const link = `${origin}/api/auth/login?key=${loginLink.id}`

      mailer.send({
        template: 'login',
        message: {
          to: [{ email: user.email }]
        },
        locals: { link }
      })

      return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
    case 'PATCH':
      user = await User.findOne({ where: { email: req.body.email } })
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
