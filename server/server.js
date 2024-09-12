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

fastify.get('/', async function handler (req, res) {
  connection.connect(err => {
    if (err) throw err

    return { message: 'Connection failure' }
  })

  return { message: 'Connection success'}
})

try {
  await fastify.listen({ port: process.env.PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}