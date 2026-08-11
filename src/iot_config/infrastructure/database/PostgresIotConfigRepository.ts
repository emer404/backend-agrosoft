import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IotGlobalConfig } from '../../domain/IotGlobalConfig';
import { IotConfigRepository } from '../../domain/IotConfigRepository';
import { IotGlobalConfigTypeORMEntity } from './IotGlobalConfigTypeORMEntity';

@Injectable()
export class PostgresIotConfigRepository implements IotConfigRepository {
  constructor(
    @InjectRepository(IotGlobalConfigTypeORMEntity)
    private readonly repo: Repository<IotGlobalConfigTypeORMEntity>,
  ) {}

  async findAll(): Promise<IotGlobalConfig[]> {
    const entities = await this.repo.find();
    return entities.map((e) => this.toDomain(e));
  }

  async findById(id: number): Promise<IotGlobalConfig | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findActivo(): Promise<IotGlobalConfig | null> {
    const entity = await this.repo.findOne({ where: { activo: true } });
    return entity ? this.toDomain(entity) : null;
  }

  async create(config: IotGlobalConfig): Promise<IotGlobalConfig> {
    const entity = this.toPersistence(config);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async update(
    id: number,
    config: Partial<IotGlobalConfig>,
  ): Promise<IotGlobalConfig> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`IotGlobalConfig with id ${id} not found`);
    }
    Object.assign(existing, this.toPersistence(config as IotGlobalConfig));
    const saved = await this.repo.save(existing);
    return this.toDomain(saved);
  }

  async delete(id: number): Promise<void> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`IotGlobalConfig with id ${id} not found`);
    }
    await this.repo.softDelete(id);
  }

  private toDomain(entity: IotGlobalConfigTypeORMEntity): IotGlobalConfig {
    return new IotGlobalConfig(
      entity.id,
      entity.name,
      entity.broker,
      entity.port,
      entity.protocol,
      entity.topic_prefix,
      entity.default_topics,
      entity.custom_topics,
      entity.lote_id,
      entity.sub_lote_id,
      entity.username,
      entity.password,
      entity.activo,
      entity.default_sensors_initialized,
      entity.auto_discover,
      entity.created_at,
      entity.updated_at,
      entity.deleted_at,
    );
  }

  private toPersistence(
    config: IotGlobalConfig,
  ): Partial<IotGlobalConfigTypeORMEntity> {
    return {
      id: config.id,
      name: config.name,
      broker: config.broker,
      port: config.port,
      protocol: config.protocol,
      topic_prefix: config.topicPrefix,
      default_topics: config.defaultTopics,
      custom_topics: config.customTopics,
      lote_id: config.loteId,
      sub_lote_id: config.subLoteId,
      username: config.username,
      password: config.password,
      activo: config.activo,
      default_sensors_initialized: config.defaultSensorsInitialized,
      auto_discover: config.autoDiscover,
    };
  }
}
