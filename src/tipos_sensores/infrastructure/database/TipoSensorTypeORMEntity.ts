import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('tipos_sensores')
export class TipoSensorTypeORMEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  unidad: string;

  @Column()
  decimales: number;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  imagen: string;

  @Column({ nullable: true })
  ttl_minutos: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
