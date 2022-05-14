import './pre-start' // Must be the first import
import logger from 'jet-logger'
import server from './server'
import { sequelize } from './db'

sequelize.authenticate().then(() => {
  console.log('database connection: OK!')
}).catch((err) => {
  console.log('unable to connect to database: ', err)
})

// Constants
const serverStartMsg = 'Express server started on port: '
const port = (process.env.PORT || 3000)

// Start server
server.listen(port, () => {
  logger.info(serverStartMsg + port)
})
