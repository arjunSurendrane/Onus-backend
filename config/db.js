import mongoose from 'mongoose'

/**
 * Connect to database
 */
const connectToDB = () => {
  // connected to database
  mongoose.set('strictQuery', true)
  const db = process.env.MONGODB_KEY.replace('<password>', process.env.PASSWORD)
  mongoose
    .connect(db)
    .then((res) => {
      console.log('connected to database')
    })
    .catch((err) => {
      console.log('database not connected ' + err)
    })
}

export default connectToDB
