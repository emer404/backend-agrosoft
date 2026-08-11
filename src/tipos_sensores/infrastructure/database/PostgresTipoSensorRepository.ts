import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoSensor } from '../../domain/TipoSensor';
import { TipoSensorRepository } from '../../domain/TipoSensorRepository';
import { TipoSensorTypeORMEntity } from './TipoSensorTypeORMEntity';

@Injectable()
export class PostgresTipoSensorRepository implements TipoSensorRepository {
  constructor(
    @InjectRepository(TipoSensorTypeORMEntity)
    private readonly repo: Repository<TipoSensorTypeORMEntity>,
  ) {}

  async findAll(): Promise<TipoSensor[]> {
    const entities = await this.repo.find();
    return entities.map((e) => this.toDomain(e));
  }

  async findById(id: number): Promise<TipoSensor | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async create(tipoSensor: TipoSensor): Promise<TipoSensor> {
    const entity = this.toPersistence(tipoSensor);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async update(
    id: number,
    tipoSensor: Partial<TipoSensor>,
  ): Promise<TipoSensor> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`TipoSensor with id ${id} not found`);
    }
    Object.assign(existing, this.toPersistence(tipoSensor as TipoSensor));
    const saved = await this.repo.save(existing);
    return this.toDomain(saved);
  }

  async delete(id: number): Promise<void> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`TipoSensor with id ${id} not found`);
    }
    await this.repo.softDelete(id);
  }

  private toDomain(entity: TipoSensorTypeORMEntity): TipoSensor {
    return new TipoSensor(
      entity.id,
      entity.nombre,
      entity.unidad,
      entity.decimales,
      entity.descripcion,
      entity.imagen,
      entity.ttl_minutos,
      entity.created_at,
      entity.updated_at,
      entity.deleted_at,
    );
  }

  private toPersistence(
    tipoSensor: TipoSensor,
  ): Partial<TipoSensorTypeORMEntity> {
    return {
      id: tipoSensor.id,
      nombre: tipoSensor.nombre,
      unidad: tipoSensor.unidad,
      decimales: tipoSensor.decimales,
      descripcion: tipoSensor.descripcion,
      imagen: tipoSensor.imagen,
      ttl_minutos: tipoSensor.ttlMinutos,
    };
  }
}
