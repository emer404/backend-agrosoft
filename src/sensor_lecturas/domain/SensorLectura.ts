export class SensorLectura {
  constructor(
    public readonly id: number | undefined,
    public sensorId: number,
    public valor: string,
    public fechaLectura: Date,
    public unidad: string,
    public observaciones: string | undefined,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | undefined,
  ) {}

  static create(data: Partial<SensorLectura>): SensorLectura {
    if (!data.sensorId) {
      throw new Error('sensorId is required');
    }
    if (!data.valor) {
      throw new Error('valor is required');
    }
    if (!data.fechaLectura) {
      throw new Error('fechaLectura is required');
    }
    if (!data.unidad) {
      throw new Error('unidad is required');
    }
    return new SensorLectura(
      data.id,
      data.sensorId,
      data.valor,
      data.fechaLectura,
      data.unidad,
      data.observaciones,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date(),
      data.deletedAt,
    );
  }

  esLecturaFutura(): boolean {
    return this.fechaLectura > new Date();
  }

  esUnidadEsperada(unidadEsperada: string): boolean {
    return this.unidad === unidadEsperada;
  }
}
