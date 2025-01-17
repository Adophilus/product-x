import Track from '@/models/Track'
import RecentActivity from '@/models/RecentActivity'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'
import Overview from '@/models/Overview'

export default async function handler(req, res) {
  const { slug } = req.query

  let track = await Track.findOne({ slug })
  if (!track)
    return res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: 'Inexistent track!' })

  switch (req.method) {
    case 'GET':
      return res.status(StatusCodes.OK).send(track)
    case 'PATCH':
      try {
        const newTrack = req.body
        newTrack.slug = newTrack.name.toLowerCase().replace(' ', '-')

        await Track.update(newTrack, { where: { slug } })

        await RecentActivity.create({
          operation: `Updated track ${track.name} -> ${newTrack.name}`,
          status: 'success',
          date: Date.now()
        })

        return res.status(StatusCodes.OK).send({ message: ReasonPhrases.OK })
      } catch (err) {
        console.log(err)
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ error: ReasonPhrases.INTERNAL_SERVER_ERROR })
      }
    case 'DELETE':
      try {
        await Track.destroy({ where: { slug } })

        const oldOverview = await Overview.findOne({ name: 'registeredTracks' })
        oldOverview.value -= 1
        await oldOverview.save()

        await RecentActivity.create({
          operation: `Deleted track ${track.name}`,
          status: 'success',
          date: Date.now()
        })

        return res.status(StatusCodes.GONE).send({ message: 'Deleted track!' })
      } catch (err) {
        console.log(err)
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ error: ReasonPhrases.INTERNAL_SERVER_ERROR })
      }
    default:
      return res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .send({ error: ReasonPhrases.METHOD_NOT_ALLOWED })
  }
}
