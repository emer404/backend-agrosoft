import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('cosecha')
export class Cosecha {
    @PrimaryGeneratedColumn()
    id_cosecha!: number;

    @Column()
    id_cultivo_real!: number;
    
    @Column()
    id_usuario_registra!: number;

    @Column({ type:'date' })
    fecha_cossecha!: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cantidad_cosechada!: number;

    @Column()
    unidad_medida!: string;

    @Column()
    tipo_cosecha!: string;

    @Column({ type: 'text', nullable: true })
    observaciones!: string;

    @CreateDateColumn()
    fecha_registro!: Date;

}
