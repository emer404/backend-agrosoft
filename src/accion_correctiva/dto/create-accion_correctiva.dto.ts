export class CreateAccionCorrectivaDto {
  id_incidencia: string;
  accion: string;
  fecha_atencion: Date;
  id_usuario: string;
  resultado_preliminar?: string;
  id_insumo?: string;
  cantidad_usada: number;
  costo_aplicado: number;
}
