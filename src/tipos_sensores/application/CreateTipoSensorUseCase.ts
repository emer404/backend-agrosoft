import { Inject } from '@nestjs/common';
import { TipoSensor } from '../domain/TipoSensor';
import { TipoSensorRepository } from '../domain/TipoSensorRepository';

export interface CreateTipoSensorCommand {
  nombre: string;
  unidad: string;
  decimales: number;
  descripcion?: string;
  imagen?: string;
  ttlMinutos?: number;
}

export class CreateTipoSensorUseCase {
  constructor(
    @Inject(TipoSensorRepository)
    private readonly tipoSensorRepository: TipoSensorRepository,
  ) {}

  async execute(command: CreateTipoSensorCommand): Promise<TipoSensor> {
    const tipoSensor = TipoSensor.create({
      nombre: command.nombre,
      unidad: command.unidad,
      decimales: command.decimales,
      descripcion: command.descripcion,
      imagen: command.imagen,
      ttlMinutos: command.ttlMinutos,
    });

    return this.tipoSensorRepository.create(tipoSensor);
  }
}
