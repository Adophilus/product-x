import Overview from '@/models/Overview'
import { ReasonPhrases, StatusCodes } from 'http-status-codes'

const actions = {
  up: [
    async () => {
      await Overview.createMany([
        {
          name: 'registeredUsers',
          value: 10
        },
        {
          name: 'registeredTracks',
          value: 10
        }
      ])
    }
  ],
  down: [
    async () => {
      await Overview.deleteMany()
    },
    async () => {
      await RecentActivity.deleteMany()
    },
    async () => {
      await Track.deleteMany()
    }
  ]
}

const Operations = {
  UP: 'up',
  DOWN: 'down'
}

export default async function handler(req, res) {
  const operation = req.params.operation ?? Operations.UP
  for (const action of actions[operation]) {
    await action()
  }
  return res.status(StatusCodes.OK).send(ReasonPhrases.OK)
}
