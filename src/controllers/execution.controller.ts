import { Router, Request, Response } from 'express'
import { useTypeORM } from '../database'
import { ExecutionEntity } from '../database/entity/execution.entity'
import calculateAllCoordinates from '../service/index'

const controller = Router()

controller
  .post('/enter-path', async (req: Request, res: Response) => {
    const execution = new ExecutionEntity()
    const t0 = performance.now()
    const coordinates = calculateAllCoordinates(req.body)
    const t1 = performance.now()

    execution.commands = req.body.commands.length
    execution.result = coordinates.uniqueCoordinates.size
    execution.duration = Number(((t1 - t0) / 1000).toFixed(6))

    const newExecution = await useTypeORM(ExecutionEntity).save(execution)
    res.status(201).json(newExecution)
  })

export default controller
