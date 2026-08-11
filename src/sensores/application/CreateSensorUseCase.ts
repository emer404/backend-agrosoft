import { Inject } from '@nestjs/common';
import { Sensor } from '../domain/Sensor';
import { SensorRepository } from '../domain/SensorRepository';

export interface CreateSensorCommand {
  nombreSensor: string;
  tipoSensorId: number;
  protocolo: string;
  endpointUrl?: string;
  mqttTopic?: string;
  valorMinimoSensor?: number;
  valorMaximoSensor?: number;
  cultivoId?: number;
  creadoPorUsuarioId: number;
  globalConfigId?: number;
  loteId?: number;
  subLoteId?: number;
}

export class CreateSensorUseCase {
  constructor(
    @Inject(SensorRepository)
    private readonly sensorRepository: SensorRepository,
  ) {}

  async execute(command: CreateSensorCommand): Promise<Sensor> {
    const sensor = Sensor.create({
      nombreSensor: command.nombreSensor,
      tipoSensorId: command.tipoSensorId,
      protocolo: command.protocolo,
      endpointUrl: command.endpointUrl,
      mqttTopic: command.mqttTopic,
      valorMinimoSensor: command.valorMinimoSensor,
      valorMaximoSensor: command.valorMaximoSensor,
      cultivoId: command.cultivoId,
      creadoPorUsuarioId: command.creadoPorUsuarioId,
      globalConfigId: command.globalConfigId,
      loteId: command.loteId,
      subLoteId: command.subLoteId,
    });

    return this.sensorRepository.create(sensor);
  }
}
