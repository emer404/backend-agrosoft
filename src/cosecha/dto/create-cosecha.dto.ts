import { isNumber, IsString, IsOptional, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCosechaDto {
    @IsNumber()
    @IsNotEmpty()
    id_cultivo_real!: number;

    @IsNumber()
    @IsNotEmpty()
    id_usuario_registra!: number;

    @IsString()
    @IsNotEmpty()
    fecha_cosecha!: string;

    @IsNumber()
    @IsNotEmpty()
    cantidad_cosechada!: number;

    @IsString()
    @IsNotEmpty()
    unidad_medida!: string;

    @IsString()
    @IsNotEmpty()
    tipo_cosecha!: string;

    @IsString()
    @IsOptional()
    observaciones!: string;
}
