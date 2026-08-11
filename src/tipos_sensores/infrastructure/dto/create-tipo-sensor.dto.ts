import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateTipoSensorDto {
  @IsString()
  nombre: string;

  @IsString()
  unidad: string;

  @IsInt()
  decimales: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsOptional()
  @IsInt()
  ttl_minutos?: number;
}
