import {
  IsString,
  IsInt,
  IsOptional,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateSensorDto {
  @IsString()
  nombre_sensor: string;

  @IsInt()
  tipo_sensor_id: number;

  @IsString()
  protocolo: string;

  @IsOptional()
  @IsString()
  endpoint_url?: string;

  @IsOptional()
  @IsString()
  mqtt_topic?: string;

  @IsOptional()
  @IsNumber()
  valor_minimo_sensor?: number;

  @IsOptional()
  @IsNumber()
  valor_maximo_sensor?: number;

  @IsOptional()
  @IsInt()
  cultivo_id?: number;

  @IsInt()
  creado_por_usuario_id: number;

  @IsOptional()
  @IsInt()
  global_config_id?: number;

  @IsOptional()
  @IsInt()
  lote_id?: number;

  @IsOptional()
  @IsInt()
  sub_lote_id?: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  estado_conexion?: string;

  @IsOptional()
  @IsString()
  estado?: string;

  @IsOptional()
  @IsString()
  ultimo_valor?: string;
}
