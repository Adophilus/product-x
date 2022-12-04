const { db, Tables } = require('../utils/db')
const Schema = require('../schema/RecentActivity')

const RecentActivity = db.define(Tables.recentActivities, Schema)

module.exports = RecentActivity
