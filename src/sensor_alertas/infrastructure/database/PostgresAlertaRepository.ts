import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SensorAlerta } from '../../domain/SensorAlerta';
import { SensorAlertaRepository } from '../../domain/SensorAlertaRepository';
import { SensorAlertaTypeORMEntity } from './SensorAlertaTypeORMEntity';

@Injectable()
export class PostgresAlertaRepository implements SensorAlertaRepository {
  constructor(
    @InjectRepository(SensorAlertaTypeORMEntity)
    private readonly repo: Repository<SensorAlertaTypeORMEntity>,
  ) {}

  async findAll(): Promise<SensorAlerta[]> {
    const entities = await this.repo.find();
    return entities.map((e) => this.toDomain(e));
  }

  async findById(id: number): Promise<SensorAlerta | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toDomain(entity) : null;
  }

  async findBySensorId(sensorId: number): Promise<SensorAlerta[]> {
    const entities = await this.repo.find({ where: { sensor_id: sensorId } });
    return entities.map((e) => this.toDomain(e));
  }

  async create(alerta: SensorAlerta): Promise<SensorAlerta> {
    const entity = this.toPersistence(alerta);
    const saved = await this.repo.save(entity);
    return this.toDomain(saved);
  }

  async delete(id: number): Promise<void> {
    const existing = await this.repo.findOne({ where: { id } });
    if (!existing) {
      throw new Error(`Alerta with id ${id} not found`);
    }
    await this.repo.softDelete(id);
  }

  private toDomain(entity: SensorAlertaTypeORMEntity): SensorAlerta {
    return new SensorAlerta(
      entity.id,
      entity.sensor_id,
      entity.valor,
      entity.umbral,
      entity.tipo,
      entity.fecha_alerta,
      entity.lote_id,
      entity.sub_lote_id,
      entity.created_at,
      entity.updated_at,
      entity.deleted_at,
    );
  }

  private toPersistence(
    alerta: SensorAlerta,
  ): Partial<SensorAlertaTypeORMEntity> {
    return {
      id: alerta.id,
      sensor_id: alerta.sensorId,
      valor: alerta.valor,
      umbral: alerta.umbral,
      tipo: alerta.tipo,
      fecha_alerta: alerta.fechaAlerta,
      lote_id: alerta.loteId,
      sub_lote_id: alerta.subLoteId,
    };
  }
}
