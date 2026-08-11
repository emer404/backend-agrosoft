import { Inject } from '@nestjs/common';
import { Sensor } from '../domain/Sensor';
import { SensorRepository } from '../domain/SensorRepository';

export class GetActiveSensorsUseCase {
  constructor(
    @Inject(SensorRepository)
    private readonly sensorRepository: SensorRepository,
  ) {}

  async execute(): Promise<Sensor[]> {
    return this.sensorRepository.findActivos();
  }
}
