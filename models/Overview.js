import { db, Tables } from '@/utils/db'
import Sequelize from 'sequelize'

const Overview = db.define(Tables.overviews, {
  name: { type: Sequelize.STRING, unique: true },
  value: {
    type: Sequelize.INTEGER
  }
})

export default Overview
