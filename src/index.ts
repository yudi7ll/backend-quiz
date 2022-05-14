import './pre-start' // Must be the first import
import logger from 'jet-logger'
import server from './server'
import { Sequelize } from 'sequelize'
// import mysql from 'mysql'

// const connection = mysql.createConnection({
//   host: 'mysql',
//   user: 'root',
//   password: 'secret',
//   database: 'quiz'
// })

// connection.connect()

const sequelize = new Sequelize('quiz', 'root', 'secret', {
  host: 'mysql',
  dialect: 'mysql'
})

console.log(sequelize.authenticate())

// Constants
const serverStartMsg = 'Express server started on port: '
const port = (process.env.PORT || 3000)

// Start server
server.listen(port, () => {
  logger.info(serverStartMsg + port)
})
