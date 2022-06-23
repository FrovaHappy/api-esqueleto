import { connect } from 'mongoose'
import configs from '../config'

// connection to db
(async () => {
  try {
    const db = await connect(configs.MONGODB_HOST)
    console.log('Db connectect to', db.connection.name)
  } catch (error) {
    console.error(error)
  }
})()
