import Fastify from 'fastify'
import mysql from 'mysql2'

const fastify = Fastify({
  logger: true
})

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.PASSWORD
})

connection.on('error', (err) => {
    console.error(`Could not create connection to server; ${err}`)
    process.exit(1)
})

connection.connect(err => { if (err) throw err })

// Routes

fastify.get('/', async function handler (req, res) {
  return { message: 'Connection success'}
})

// Scrape recipe from a listed site



try {
  fastify.listen({ port: process.env.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}