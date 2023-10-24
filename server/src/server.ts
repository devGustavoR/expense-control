import fastify from 'fastify'
import { memories } from './routes/memories'

const app = fastify()

app.register(memories)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🔥HTTP server running on http://localhost:3333')
  })
