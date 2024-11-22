import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import IExecution from '../model/execution.model'

@Entity()
export class ExecutionEntity implements IExecution {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ default: new Date().toISOString() })
  timestamp!: string;

  @Column()
  commands!: number;

  @Column()
  result!: number;

  @Column('decimal', { precision: 10, scale: 6 })
  duration!: number;
}