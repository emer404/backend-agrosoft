import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('sensores')
export class SensorTypeORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre_sensor: string;

  @Column()
  tipo_sensor_id: number;

  @Column()
  protocolo: string;

  @Column({ nullable: true })
  endpoint_url: string;

  @Column({ nullable: true })
  mqtt_topic: string;

  @Column('double precision', { nullable: true })
  valor_minimo_sensor: number;

  @Column('double precision', { nullable: true })
  valor_maximo_sensor: number;

  @Column({ default: true })
  activo: boolean;

  @Column({ default: 'desconectado' })
  estado_conexion: string;

  @Column({ default: 'activo' })
  estado: string;

  @Column({ nullable: true })
  ultimo_valor: string;

  @Column('timestamp', { nullable: true })
  ultima_medicion: Date;

  @Column('timestamp', { nullable: true })
  last_seen_at: Date;

  @Column({ nullable: true })
  cultivo_id: number;

  @Column({ nullable: true })
  creado_por_usuario_id: number;

  @Column({ nullable: true })
  global_config_id: number;

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
