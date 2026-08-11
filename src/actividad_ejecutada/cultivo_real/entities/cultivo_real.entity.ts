import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('cultivo_real')
export class CultivoReal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ nullable: true })
  variedad: string;

  @Column({ type: 'date', nullable: true })
  fecha_siembra: Date;

  @Column({ type: 'date', nullable: true })
  fecha_cosecha_estimada: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  superficie_hectareas: number;

  @Column({ default: true })
  activo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}
