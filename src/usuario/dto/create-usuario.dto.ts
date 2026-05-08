import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, IsEmail } from 'class-validator';

export class CreateUsuarioDto {
  @IsInt()
  id_rol: number;

  @IsInt()
  @IsOptional()
  id_cultivo_real?: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  correo_usuario: string;

  @IsString()
  @IsNotEmpty()
  contrasena_hash: string;

  @IsBoolean()
  @IsOptional()
  estado?: boolean;

  @IsString()
  @IsOptional()
  telefono?: string;
}
