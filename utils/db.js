import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config();

const db = mongoose.createConnection(process.env.MONGO_URI)

export default db
