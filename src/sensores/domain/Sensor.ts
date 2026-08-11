export class Sensor {
  constructor(
    public readonly id: number | undefined,
    public nombreSensor: string,
    public tipoSensorId: number,
    public protocolo: string,
    public endpointUrl: string | undefined,
    public mqttTopic: string | undefined,
    public valorMinimoSensor: number | undefined,
    public valorMaximoSensor: number | undefined,
    public activo: boolean,
    public estadoConexion: string,
    public estado: string,
    public ultimoValor: string | undefined,
    public ultimaMedicion: Date | undefined,
    public lastSeenAt: Date | undefined,
    public cultivoId: number | undefined,
    public creadoPorUsuarioId: number,
    public globalConfigId: number | undefined,
    public loteId: number | undefined,
    public subLoteId: number | undefined,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | undefined,
  ) {}

  static create(data: Partial<Sensor>): Sensor {
    if (!data.nombreSensor) {
      throw new Error('nombreSensor is required');
    }
    if (!data.tipoSensorId) {
      throw new Error('tipoSensorId is required');
    }
    if (!data.protocolo) {
      throw new Error('protocolo is required');
    }
    return new Sensor(
      data.id,
      data.nombreSensor,
      data.tipoSensorId,
      data.protocolo,
      data.endpointUrl,
      data.mqttTopic,
      data.valorMinimoSensor,
      data.valorMaximoSensor,
      data.activo ?? true,
      data.estadoConexion ?? 'desconectado',
      data.estado ?? 'activo',
      data.ultimoValor,
      data.ultimaMedicion,
      data.lastSeenAt,
      data.cultivoId,
      data.creadoPorUsuarioId!,
      data.globalConfigId,
      data.loteId,
      data.subLoteId,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date(),
      data.deletedAt,
    );
  }

  actualizarUltimoValor(valor: string, fecha: Date): void {
    this.ultimoValor = valor;
    this.ultimaMedicion = fecha;
    this.lastSeenAt = fecha;
    this.updatedAt = new Date();
  }

  activar(): void {
    this.activo = true;
    this.estado = 'activo';
  }

  desactivar(): void {
    this.activo = false;
    this.estado = 'inactivo';
  }

  estaConectado(): boolean {
    return this.estadoConexion === 'conectado';
  }

  estaEnRango(valor: number): boolean {
    if (
      this.valorMinimoSensor === undefined ||
      this.valorMaximoSensor === undefined
    ) {
      return false;
    }
    return valor >= this.valorMinimoSensor && valor <= this.valorMaximoSensor;
  }
}
