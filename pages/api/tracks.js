import Overview from '@/models/Overview'
import RecentActivity from '@/models/RecentActivity'
import Track from '@/models/Track'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const tracks = await Track.find()
      return res.status(StatusCodes.OK).send(tracks)
    case 'PUT':
      console.log(req.body)
      const trackName = req.body.name
      const trackLink = req.body.link
      const trackDecription = req.body.description
      const trackSlug = req.body.name.toLowerCase().replace(' ', '-')
      try {
        const track = await Track.create({
          name: trackName,
          link: trackLink,
          description: trackDecription,
          slug: trackSlug
        })

        const oldOverview = await Overview.findOne({ name: 'registeredTracks' })
        oldOverview.value += 1
        await oldOverview.save()

        await RecentActivity.create({
          operation: `Added ${trackName} track`,
          status: 'success',
          date: Date.now()
        })
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
