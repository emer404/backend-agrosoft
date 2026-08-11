import { Injectable, Logger, OnModuleInit, Inject } from '@nestjs/common';
import { SensorRepository } from '../../domain/SensorRepository';

@Injectable()
export class MqttSensorListener implements OnModuleInit {
  private readonly logger = new Logger(MqttSensorListener.name);

  constructor(
    @Inject(SensorRepository)
    private readonly sensorRepository: SensorRepository,
  ) {}

  onModuleInit() {
    this.logger.log(
      'MqttSensorListener initialized - ready to subscribe to MQTT topics',
    );
  }

  async handleMqttMessage(topic: string, payload: Buffer): Promise<void> {
    this.logger.log(`MQTT message received on topic: ${topic}`);

    const sensors = await this.sensorRepository.findAll();
    const matchingSensor = sensors.find((s) => s.mqttTopic === topic);

    if (!matchingSensor) {
      this.logger.warn(`No sensor found for topic: ${topic}`);
      return;
    }

    const valor = payload.toString();
    matchingSensor.actualizarUltimoValor(valor, new Date());

    if (matchingSensor.id === undefined) {
      this.logger.warn(`Sensor found for topic ${topic} has no id`);
      return;
    }

    await this.sensorRepository.update(matchingSensor.id, {
      ultimoValor: matchingSensor.ultimoValor,
      ultimaMedicion: matchingSensor.ultimaMedicion,
      lastSeenAt: matchingSensor.lastSeenAt,
      estadoConexion: 'conectado',
    });

    this.logger.log(
      `Sensor ${matchingSensor.nombreSensor} updated with value: ${valor}`,
    );
  }
}
