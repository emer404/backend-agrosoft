export class IotGlobalConfig {
  constructor(
    public readonly id: number | undefined,
    public name: string,
    public broker: string,
    public port: number,
    public protocol: string,
    public topicPrefix: string,
    public defaultTopics: string,
    public customTopics: string,
    public loteId: number | undefined,
    public subLoteId: number | undefined,
    public username: string,
    public password: string,
    public activo: boolean,
    public defaultSensorsInitialized: boolean,
    public autoDiscover: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | undefined,
  ) {}

  static create(data: Partial<IotGlobalConfig>): IotGlobalConfig {
    if (!data.name) {
      throw new Error('name is required');
    }
    if (!data.broker) {
      throw new Error('broker is required');
    }
    if (!data.port) {
      throw new Error('port is required');
    }
    if (!data.protocol) {
      throw new Error('protocol is required');
    }
    if (!['mqtt', 'mqtts', 'tcp', 'wss'].includes(data.protocol)) {
      throw new Error('protocol must be one of: mqtt, mqtts, tcp, wss');
    }
    return new IotGlobalConfig(
      data.id,
      data.name,
      data.broker,
      data.port,
      data.protocol,
      data.topicPrefix ?? data.name?.toLowerCase().replace(/\s+/g, '-') ?? '',
      data.defaultTopics ?? '',
      data.customTopics ?? '',
      data.loteId,
      data.subLoteId,
      data.username ?? '',
      data.password ?? '',
      data.activo ?? true,
      data.defaultSensorsInitialized ?? false,
      data.autoDiscover ?? false,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date(),
      data.deletedAt,
    );
  }

  connectionUrl(): string {
    const auth = this.username ? `${this.username}:${this.password}@` : '';
    return `${this.protocol}://${auth}${this.broker}:${this.port}`;
  }

  activar(): void {
    this.activo = true;
  }

  desactivar(): void {
    this.activo = false;
  }

  estaActivo(): boolean {
    return this.activo;
  }
}
