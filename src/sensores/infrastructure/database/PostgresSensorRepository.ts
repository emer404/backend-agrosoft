import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sensor } from '../../domain/Sensor';
import { SensorRepository } from '../../domain/SensorRepository';
import { SensorTypeORMEntity } from './SensorTypeORMEntity';
import { SensorNotFoundException } from '../../domain/exceptions/SensorNotFoundException';

@Injectable()
export class PostgresSensorRepository implements SensorRepository {
  constructor(
    @InjectRepository(SensorTypeORMEntity)
    private readonly repo: Repository<SensorTypeORMEntity>,
  ) {}

  async findAll(): Promise<Sensor[]> {
    const entities = await this.repo.find();
    return entities.map((e) => this.toDomain(e));
  }

  async findById(id: number): Promise<Sensor | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findByCultivoId(cultivoId: number): Promise<Sensor[]> {
    const entities = await this.repo.find({ where: { cultivo_id: cultivoId } });
    return entities.map((e) => this.toDomain(e));
  }

  async findActivos(): Promise<Sensor[]> {
    const entities = await this.repo.find({ where: { activo: true } });
    return entities.map((e) => this.toDomain(e));
  }

  async create(sensor: Sensor): Promise<Sensor> {
    const entity = this.toPersistence(sensor);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async update(id: number, sensor: Partial<Sensor>): Promise<Sensor> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new SensorNotFoundException(id);
    }
    Object.assign(existing, this.toPersistence(sensor as Sensor));
    const saved = await this.repo.save(existing);
    return this.toDomain(saved);
  }

  async delete(id: number): Promise<void> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new SensorNotFoundException(id);
    }
    await this.repo.softDelete(id);
  }

  private toDomain(entity: SensorTypeORMEntity): Sensor {
    return new Sensor(
      entity.id,
      entity.nombre_sensor,
      entity.tipo_sensor_id,
      entity.protocolo,
      entity.endpoint_url,
      entity.mqtt_topic,
      entity.valor_minimo_sensor,
      entity.valor_maximo_sensor,
      entity.activo,
      entity.estado_conexion,
      entity.estado,
      entity.ultimo_valor,
      entity.ultima_medicion,
      entity.last_seen_at,
      entity.cultivo_id,
      entity.creado_por_usuario_id,
      entity.global_config_id,
      entity.lote_id,
      entity.sub_lote_id,
      entity.created_at,
      entity.updated_at,
      entity.deleted_at,
    );
  }

  private toPersistence(sensor: Sensor): Partial<SensorTypeORMEntity> {
    return {
      id: sensor.id,
      nombre_sensor: sensor.nombreSensor,
      tipo_sensor_id: sensor.tipoSensorId,
      protocolo: sensor.protocolo,
      endpoint_url: sensor.endpointUrl,
      mqtt_topic: sensor.mqttTopic,
      valor_minimo_sensor: sensor.valorMinimoSensor,
      valor_maximo_sensor: sensor.valorMaximoSensor,
      activo: sensor.activo,
      estado_conexion: sensor.estadoConexion,
      estado: sensor.estado,
      ultimo_valor: sensor.ultimoValor,
      ultima_medicion: sensor.ultimaMedicion,
      last_seen_at: sensor.lastSeenAt,
      cultivo_id: sensor.cultivoId,
      creado_por_usuario_id: sensor.creadoPorUsuarioId,
      global_config_id: sensor.globalConfigId,
      lote_id: sensor.loteId,
      sub_lote_id: sensor.subLoteId,
    };
  }
}
