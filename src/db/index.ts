import { Sequelize } from 'sequelize'

const dbName = process.env.DB_DATABASE || 'quiz'
const dbUsername = process.env.DB_USERNAME || 'root'
const dbPassword = process.env.DB_PASSWORD || 'secret'
const dbHost = process.env.DB_HOSTNAME || 'mysql'

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: 'mysql'
})

export { Sequelize, sequelize }
