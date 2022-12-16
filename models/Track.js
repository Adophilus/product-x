const { db, Tables } = require('../utils/db')
const Schema = require('../schema/Track')
const Overview = require('./Overview')

const Track = db.define(Tables.tracks, Schema)
Track.addHook('afterCreate', 'register-track', async () => {
  const registeredTracksOverview = await Overview.findOne({ where: { name: 'registeredTracks'}})
  registeredTracksOverview.value += 1
  await registeredTracksOverview.save()
})
Track.addHook('afterDelete', 'unregister-track', async () => {
  const registeredTracksOverview = await Overview.findOne({ where: { name: 'registeredTracks'}})
  registeredTracksOverview.value -= 1
  await registeredTracksOverview.save()
})

module.exports = Track
