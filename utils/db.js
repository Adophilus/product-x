const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const db = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  define: {
    timestamps: false
  }
})

exports.Tables = {
  overviews: 'overviews',
  tracks: 'tracks',
  users: 'users',
  recentActivities: 'recent_activities',
  loginLinks: 'login_links'
}

exports.db = db
module.export = db
