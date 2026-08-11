import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('accion_correctiva')
export class AccionCorrectiva {
  @PrimaryGeneratedColumn()
  id_accion_correctiva: number;

  @Column()
  id_incidencia: number;

  @Column()
  accion: string;

  @Column({ type: 'timestamp' })
  fecha_atencion: Date;

  @Column()
  id_usuario: number;

  @Column({ nullable: true })
  resultado_preliminar: string;

  @Column({ nullable: true })
  id_insumo: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  cantidad_usada: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  costo_aplicado: number;
}
