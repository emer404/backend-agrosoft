import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cultivo {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string; // ej: Maíz, Café, Arroz

  @Column()
  tipo!: string; //  fruta, leguminosa, etc.

  @Column({ type: 'int' })
  areaHectareas!: number;

  @Column({ default: true })
  activo!: boolean;
}