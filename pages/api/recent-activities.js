import RecentActivity from '@/models/RecentActivity'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const recentActivities = await RecentActivity.findAll()
      return res.status(StatusCodes.OK).send(recentActivities)
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
  }
}
