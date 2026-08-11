export class TipoSensor {
  constructor(
    public readonly id: number | undefined,
    public nombre: string,
    public unidad: string,
    public decimales: number,
    public descripcion: string | undefined,
    public imagen: string | undefined,
    public ttlMinutos: number | undefined,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | undefined,
  ) {}

  static create(data: Partial<TipoSensor>): TipoSensor {
    if (!data.nombre) {
      throw new Error('nombre is required');
    }
    if (!data.unidad) {
      throw new Error('unidad is required');
    }
    if (data.decimales === undefined || data.decimales === null) {
      throw new Error('decimales is required');
    }
    return new TipoSensor(
      data.id,
      data.nombre,
      data.unidad,
      data.decimales,
      data.descripcion,
      data.imagen,
      data.ttlMinutos,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date(),
      data.deletedAt,
    );
  }
}
