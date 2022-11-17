import Overview from '@/models/Overview'
import Track from '@/models/Track'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const tracks = await Track.find()
      return res.status(StatusCodes.OK).send(tracks)
    case 'PUT':
      const trackName = req.body.name
      try {
        const track = await Track.create({ name: trackName })
        const oldOverview = await Overview.findOne({ name: 'registeredTracks' })
        oldOverview.value += 1
        await oldOverview.save()
        return res.status(StatusCodes.CREATED).send(track)
      } catch (err) {
        console.log(err)
        return res
          .send(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ error: ReasonPhrases.INTERNAL_SERVER_ERROR })
      }
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
  }
}
