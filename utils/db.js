const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite'
})

exports.Tables = {
  overviews: 'overviews',
  tracks: 'tracks',
  users: 'users',
  recentActivities: 'recent_activities'
}

exports.db = db
module.export = db
