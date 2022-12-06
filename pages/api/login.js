import User from '@/models/User'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import jwt from 'jsonwebtoken'
import config from '@/config/config'

export default async function handler(req, res) {
  switch (req.method) {
    case 'POST':
      const user = User.findOne({ email: req.body.email })
      if (!user)
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .send(ReasonPhrases.UNAUTHORIZED)
      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: '7d'
      })
      return res.status(StatusCodes.OK).send({ token })
  }
}
