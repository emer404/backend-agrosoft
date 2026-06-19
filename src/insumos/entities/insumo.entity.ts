import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Insumo {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nombre!: string;

  @Column()
  tipo!: string;

  @Column({ type: 'int' })
  stock!: number;
}