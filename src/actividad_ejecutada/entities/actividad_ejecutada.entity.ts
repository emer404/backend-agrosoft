import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity('actividad_ejecutada')
export class ActividadEjecutada {
  @PrimaryGeneratedColumn()
  id_actividad_ejecutada: number;

  @Column()
  id_cultivo_real: number;

  @Column()
  id_cultivo: number;

  @Column({ type: 'date' })
  fecha_ejecucion: Date;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  id_usuario: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  cantidad_usada: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo_aplicado: number;

  @Column({ type: 'text', nullable: true })
  observaciones: string;
}