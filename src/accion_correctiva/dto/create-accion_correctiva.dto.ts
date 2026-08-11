export class CreateAccionCorrectivaDto {
  id_incidencia: number;

  accion: string;

  fecha_atencion: Date;

  id_usuario: number;

  resultado_preliminar?: string;

  id_insumo?: number;

  cantidad_usada?: number;

  costo_aplicado?: number;
}
