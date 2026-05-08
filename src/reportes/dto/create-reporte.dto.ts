import { IsNumber, IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CreateReporteDto {
    @IsNumber()
    @IsOptional()
    id_cosecha!: number;

    @IsNumber()
    @IsOptional()
    id_venta!: number;

    @IsNumber()
    @IsOptional()
    id_incidencia!: number;

    @IsNumber()
    @IsNotEmpty()
    id_cultivo_real!: number;

    @IsNumber()
    @IsNotEmpty()
    id_usuario!: number;

    @IsString()
    @IsNotEmpty()
    tipo_reporte!: string;

    @IsString()
    @IsNotEmpty()
    formato_reporte!: string;
}