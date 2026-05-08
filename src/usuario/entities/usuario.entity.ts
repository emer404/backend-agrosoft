import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Rol } from '../../rol/entities/rol.entity';
import { ActividadEjecutada } from '../../actividad_ejecutada/entities/actividad_ejecutada.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @ManyToOne(() => Rol)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;

  @Column()
  id_rol: number;

  @Column({ nullable: true })
  id_cultivo_real: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  correo_usuario: string;

  @Column()
  contrasena_hash: string;

  @Column({ default: true })
  estado: boolean;

  @Column({ nullable: true })
  telefono: string;

  @OneToMany(() => ActividadEjecutada, actividad => actividad.usuario)
  actividadesEjecutadas: ActividadEjecutada[];
}
