import { db, Tables } from '@/utils/db'
import Sequelize from 'sequelize'

const User = db.define(Tables.users, {
  name: {
    type: Sequelize.STRING,
    unique: true,
    validate: { isEmail: true }
  }
})

export default User
