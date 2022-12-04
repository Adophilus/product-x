const { db, Tables } = require('../utils/db')
const Schema = require('../schema/Track')

const Track = db.define(Tables.tracks, Schema)

module.exports = Track
