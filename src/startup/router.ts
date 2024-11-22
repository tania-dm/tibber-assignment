import { Express, Request, Response } from 'express'
import ExecutionRouter from '../controllers/execution.controller'

const routerSetup = (app: Express) =>
  app
    .get('/healthcheck', (req: Request, res: Response) => {
      res.send('Hello World!')
    })

    .use('/tibber-developer-test', ExecutionRouter)

export default routerSetup
