import connection from '@/utils/db'
import mongoose from 'mongoose'

export default connection.models.Stat ??
  connection.model(
    'Stat',
    mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
    })
  )
