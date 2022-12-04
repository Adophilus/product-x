import { db, Tables } from '@/utils/db'
import Sequelize from 'sequelize'

const RecentActivity = db.define(Tables.recentActivities, {
  operation: {
    type: Sequelize.STRING,
    unique: true
  },
  status: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATETIME,
    defaultValue: Sequelize.NOW
  }
})

export default RecentActivity
