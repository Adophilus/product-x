import { db, Tables } from '@/utils/db'
import Sequelize from 'sequelize'

const User = db.define(Tables.tracks, {
  name: {
    type: Sequelize.STRING,
    unique: true
  },
  slug: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING,
    validate: {
      isURL: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  registrations: {
    type: Sequelize.INTEGER
  }
})

export default User
