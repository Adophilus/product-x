import connection from '@/utils/db'
import mongoose from 'mongoose'

export default connection.models.Track ??
  connection.model(
    'RecentActivity',
    mongoose.Schema({
      operation: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
    })
  )
