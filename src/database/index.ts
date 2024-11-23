import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm'
import { ExecutionEntity } from './entity/execution.entity'

let typeORMDB: DataSource

export default async function typeORMConnect(): Promise<void> {
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.POSTGRES_URL,
    entities: [ExecutionEntity],
    synchronize: true,
  })

  typeORMDB = await dataSource.initialize()
}

export function useTypeORM(
  entity: EntityTarget<ObjectLiteral>,
): Repository<ObjectLiteral> {
  if (!typeORMDB) {
    throw new Error('TypeORM has not been initialized!')
  }

  return typeORMDB.getRepository(entity)
}
