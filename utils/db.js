import Sequelize from 'sequelize'
import * as dotenv from 'dotenv'

dotenv.config()

export const db = new Sequelize({
  dialect: 'sqlite3',
  storage: './db.sqlite3'
})

export const Tables = {
  overviews: 'overviews',
  tracks: 'tracks',
  users: 'users',
  recentActivities: 'recent_activities'
}

export default db
