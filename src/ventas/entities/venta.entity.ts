import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('ventas')
export class Venta {
    @PrimaryGeneratedColumn()
    id_venta!: number;

    @Column()
    id_cosecha!: number;

    @CreateDateColumn()
    fecha_venta!: Date;

    @Column('decimal', {precision: 10, scale: 2})
    cantidad_vendida!: number;

    @Column('decimal', {precision: 10, scale: 2})
    precio_unitario!: number;

    @Column('decimal', {precision: 10, scale: 2})
    ingreso_total!: number;

    @Column()
    forma_pago!: string;

    @Column()
    estado_pago!: string;
}
