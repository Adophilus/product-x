const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const Schema = {
  operation: {
    type: Sequelize.STRING,
    unique: true
  },
  status: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
}

const RecentActivity = db.define(Tables.recentActivities, Schema)

exports.Schema = Schema
exports.RecentActivity = RecentActivity
module.exports = RecentActivity
