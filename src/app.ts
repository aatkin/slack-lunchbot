import * as express from 'express'
import * as morgan from 'morgan'

export function setupRoutes(app: express.Application) {
  const lunches = ['dennis', 'kado', 'fontana', 'di trevi', 'morrison', 'julinia']

  app.get('/lunch', (_req, res) => {
    const index = Math.floor(Math.random() * lunches.length)
    const lunch = lunches[index]
    res.json({ lunch })
  })
}

export function configure(app: express.Application) {
  app.use(morgan('tiny'))
}

export function bootstrap(): express.Application {
  const app = express()
  return app
}

if (!module.parent) {
  const app = bootstrap()
  configure(app)
  setupRoutes(app)

  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`server listening at localhost:${port}`)
  })
}