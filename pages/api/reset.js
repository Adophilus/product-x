import RecentActivity from '@/models/RecentActivity'
import Track from '@/models/Track'
import User from '@/models/User'
import ResponseMessages from '@/utils/ResponseMessages'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      await Track.deleteMany()
      await RecentActivity.deleteMany()
      await User.deleteMany()
      return res
        .status(StatusCodes.OK)
        .send(ResponseMessages.success.DeletedRecords)
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
  }
}
