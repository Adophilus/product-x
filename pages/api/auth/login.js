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
    case 'PATCH':
      const { key } = req.body
      loginLink = await LoginLink.findOne({ where: { id: key } })
      if (loginLink == null)
        return res.status(StatusCodes.BAD_REQUEST).send('Invalid login link!')
      user = await User.findOne({ where: { email: loginLink.user } })
      if (Date.now() > loginLink.expires)
        return res.status(StatusCodes.BAD_REQUEST).send('Login link expired!')
      const token = jwt.sign(
        { email: user.email },
        config.jwt.secret,
        config.jwt.options
      )
      return res.status(StatusCodes.OK).send({ token })
    case 'POST':
      user = await User.findOne({ where: { email: req.body.email } })
      if (user == null) return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
      const { origin } = absoluteUrl(req)
      loginLink = await LoginLink.create({ user: user.email })
      const link = `${origin}/login?key=${loginLink.id}`

      mailer.send({
        template: 'login',
        message: {
          to: [{ email: user.email }]
        },
        locals: { link }
      })

      return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send(ReasonPhrases.METHOD_NOT_ALLOWED)
  }
}
