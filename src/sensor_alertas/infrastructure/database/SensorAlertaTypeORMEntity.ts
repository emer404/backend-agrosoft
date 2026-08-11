import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('sensor_alertas')
export class SensorAlertaTypeORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sensor_id: number;

  @Column('double precision')
  valor: number;

  @Column('double precision')
  umbral: number;

  @Column('varchar', { length: 10 })
  tipo: string;

  @Column('timestamp')
  fecha_alerta: Date;

  @Column({ nullable: true })
  lote_id: number;

  @Column({ nullable: true })
  sub_lote_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
