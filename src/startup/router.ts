import { Express, Request, Response } from 'express';
import calculateAllCoordinates from '../service/index'

const routerSetup = (app: Express) =>
  app
  .get('/healthcheck', (req: Request, res: Response) => {
    res.send('Hello World!');
  })

  .post('/tibber-developer-test/clean', (req: Request, res: Response) => {
    const t0 = performance.now();
    const coordinates = calculateAllCoordinates(req.body)
    const t1 = performance.now();

    res.status(201).send({
        commands: req.body.commands.length,
        result: coordinates.uniqueCoordinates.size,
        duration: Number(((t1 - t0)/ 1000).toFixed(6))
    })
  })

export default routerSetup;