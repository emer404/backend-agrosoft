import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('iot_global_config')
export class IotGlobalConfigTypeORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  broker: string;

  @Column()
  port: number;

  @Column()
  protocol: string;

  @Column()
  topic_prefix: string;

  @Column('text', { nullable: true })
  default_topics: string;

  @Column('text', { nullable: true })
  custom_topics: string;

  @Column({ nullable: true })
  lote_id: number;

  @Column({ nullable: true })
  sub_lote_id: number;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: true })
  activo: boolean;

  @Column({ default: false })
  default_sensors_initialized: boolean;

  @Column({ default: false })
  auto_discover: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
