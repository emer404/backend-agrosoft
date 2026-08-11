import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorLectura } from '../../domain/SensorLectura';
import { SensorLecturaRepository } from '../../domain/SensorLecturaRepository';
import { SensorLecturaTypeORMEntity } from './SensorLecturaTypeORMEntity';

@Injectable()
export class PostgresLecturaRepository implements SensorLecturaRepository {
  constructor(
    @InjectRepository(SensorLecturaTypeORMEntity)
    private readonly repo: Repository<SensorLecturaTypeORMEntity>,
  ) {}

  async findAll(): Promise<SensorLectura[]> {
    const entities = await this.repo.find();
    return entities.map((e) => this.toDomain(e));
  }

  async findById(id: number): Promise<SensorLectura | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findBySensorId(sensorId: number): Promise<SensorLectura[]> {
    const entities = await this.repo.find({ where: { sensor_id: sensorId } });
    return entities.map((e) => this.toDomain(e));
  }

  async create(lectura: SensorLectura): Promise<SensorLectura> {
    const entity = this.toPersistence(lectura);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async delete(id: number): Promise<void> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`Lectura with id ${id} not found`);
    }
    await this.repo.softDelete(id);
  }

  private toDomain(entity: SensorLecturaTypeORMEntity): SensorLectura {
    return new SensorLectura(
      entity.id,
      entity.sensor_id,
      entity.valor,
      entity.fecha_lectura,
      entity.unidad,
      entity.observaciones,
      entity.created_at,
      entity.updated_at,
      entity.deleted_at,
    );
  }

  private toPersistence(
    lectura: SensorLectura,
  ): Partial<SensorLecturaTypeORMEntity> {
    return {
      id: lectura.id,
      sensor_id: lectura.sensorId,
      valor: lectura.valor,
      fecha_lectura: lectura.fechaLectura,
      unidad: lectura.unidad,
      observaciones: lectura.observaciones,
    };
  }
}
