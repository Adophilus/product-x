import connection from '@/utils/db'
import mongoose from 'mongoose'

export default connection.models.Track ??
  connection.model(
    'Track',
    mongoose.Schema({
      slug: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      registrations: {
        type: Number,
        required: true,
        default: 0
      }
    })
  )
