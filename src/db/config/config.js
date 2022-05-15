const dbName = process.env.DB_DATABASE || 'quiz'
const dbUsername = process.env.DB_USERNAME || 'root'
const dbPassword = process.env.DB_PASSWORD || 'secret'
const dbHost = process.env.DB_HOSTNAME || 'mysql'
const dbDialect = process.env.DB_DIALECT || 'mysql'

module.exports = {
  development: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: dbDialect
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: dbDialect
  },
  production: {
    username: dbUsername,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: dbDialect
  }
}
