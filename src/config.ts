import 'dotenv/config'

const port = process.env.PORT || 3000
const dbName = process.env.MONGODB_NAME || 'test-db'
const dbPassword = process.env.MONGODB_PASSWORD || ''

let getDbHost = process.env.MONGODB_HOST || 'mongodb://localhost:27017/<database>'
getDbHost = getDbHost
  .replace('<database>', dbName)
  .replace('<password>', dbPassword)

const configs = {
  MONGODB_HOST: getDbHost,
  PORT: port
}

export default configs
