import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('acciones_correctivas')
export class AccionCorrectiva {
  @PrimaryGeneratedColumn('uuid')
  id_accion_correctiva: string;

  @Column('uuid')
  id_incidencia: string;

  @Column('text')
  accion: string;

  @Column('timestamp')
  fecha_atencion: Date;

  @Column('uuid')
  id_usuario: string;

  @Column('text', { nullable: true })
  resultado_preliminar?: string;

  @Column('uuid', { nullable: true })
  id_insumo?: string;

  @Column('decimal', { precision: 10, scale: 2 })
  cantidad_usada: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costo_aplicado: number;
}
