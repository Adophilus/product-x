const { db, Tables } = require('../utils/db')
const Sequelize = require('sequelize')

const RecentActivity = db.define(Tables.recentActivities, {
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
})

module.exports = RecentActivity
