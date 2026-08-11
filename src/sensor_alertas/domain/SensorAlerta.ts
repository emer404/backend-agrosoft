export class SensorAlerta {
  constructor(
    public readonly id: number | undefined,
    public sensorId: number,
    public valor: number,
    public umbral: number,
    public tipo: string,
    public fechaAlerta: Date,
    public loteId: number | undefined,
    public subLoteId: number | undefined,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | undefined,
  ) {}

  static create(data: Partial<SensorAlerta>): SensorAlerta {
    if (!data.sensorId) {
      throw new Error('sensorId is required');
    }
    if (data.valor === undefined || data.valor === null) {
      throw new Error('valor is required');
    }
    if (data.umbral === undefined || data.umbral === null) {
      throw new Error('umbral is required');
    }
    if (!data.tipo) {
      throw new Error('tipo is required');
    }
    if (!['critica', 'alta', 'media', 'baja'].includes(data.tipo)) {
      throw new Error('tipo must be one of: critica, alta, media, baja');
    }
    return new SensorAlerta(
      data.id,
      data.sensorId,
      data.valor,
      data.umbral,
      data.tipo,
      data.fechaAlerta ?? new Date(),
      data.loteId,
      data.subLoteId,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date(),
      data.deletedAt,
    );
  }

  esCritica(): boolean {
    return this.tipo === 'critica';
  }

  excedioUmbral(): boolean {
    return this.valor > this.umbral;
  }
}
