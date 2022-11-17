import connection from '@/utils/db'
import mongoose from 'mongoose'

export default connection.models.User ??
  connection.model(
    'User',
    mongoose.Schema({
      email: {
        type: String,
        required: true
      }
    })
  )
