import Track from '@/models/Track'
import RecentActivity from '@/models/RecentActivity'
import Overview from '@/models/Overview'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

export default async function handler(req, res) {
  const { slug } = req.query
  let track = await Track.findOne({ slug })
  switch (req.method) {
    case 'GET':
      if (!track)
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: 'Inexistent track!' })
      return res.status(StatusCodes.OK).send(track)
    case 'PATCH':
      const newTrack = { ...req.body }
      console.log(newTrack)
      if (!track)
        return res
          .status(StatusCodes.NOT_FOUND)
          .send({ error: 'Inexistent track!' })

      await RecentActivity.create({
        operation: `Updated track ${track.name} -> ${newTrack.name}`,
        status: 'success',
        date: Date.now()
      })

      newTrack.slug = newTrack.name
      await Track.updateOne({ slug }, newTrack)
      return res.status(StatusCodes.OK).send({ message: ReasonPhrases.OK })
    case 'DELETE':
      try {
        await Track.deleteOne({ slug })

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
        logger.error(err)
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
