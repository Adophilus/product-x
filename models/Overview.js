const { db, Tables } = require('../utils/db')
const Schema = require('../schema/Overview')

const Overview = db.define(Tables.overviews, Schema)

module.exports = Overview
