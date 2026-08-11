import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('sensor_lecturas')
export class SensorLecturaTypeORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensor_id: number;

  @Column()
  valor: string;

  @Column('timestamptz')
  fecha_lectura: Date;

  @Column()
  unidad: string;

  @Column({ nullable: true })
  observaciones: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
