import { Inject } from '@nestjs/common';
import { SensorLectura } from '../domain/SensorLectura';
import { SensorLecturaRepository } from '../domain/SensorLecturaRepository';

export interface RegisterReadingCommand {
  sensorId: number;
  valor: string;
  fechaLectura: Date;
  unidad: string;
  observaciones?: string;
}

export class RegisterReadingUseCase {
  constructor(
    @Inject(SensorLecturaRepository)
    private readonly lecturaRepository: SensorLecturaRepository,
  ) {}

  async execute(command: RegisterReadingCommand): Promise<SensorLectura> {
    const lectura = SensorLectura.create({
      sensorId: command.sensorId,
      valor: command.valor,
      fechaLectura: command.fechaLectura,
      unidad: command.unidad,
      observaciones: command.observaciones,
    });
    return this.lecturaRepository.create(lectura);
  }
}
