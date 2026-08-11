import { Inject } from '@nestjs/common';
import { SensorAlerta } from '../domain/SensorAlerta';
import { SensorAlertaRepository } from '../domain/SensorAlertaRepository';
import { EmailNotifierAdapter } from '../infrastructure/primary/EmailNotifierAdapter';
import { PushNotificationAdapter } from '../infrastructure/primary/PushNotificationAdapter';

export interface CreateAlertCommand {
  sensorId: number;
  valor: number;
  umbral: number;
  tipo: string;
  fechaAlerta?: Date;
  loteId?: number;
  subLoteId?: number;
}

export class CreateAlertUseCase {
  constructor(
    @Inject(SensorAlertaRepository)
    private readonly alertaRepository: SensorAlertaRepository,
    private readonly emailNotifier: EmailNotifierAdapter,
    private readonly pushNotifier: PushNotificationAdapter,
  ) {}

  async execute(command: CreateAlertCommand): Promise<SensorAlerta> {
    const alerta = SensorAlerta.create({
      sensorId: command.sensorId,
      valor: command.valor,
      umbral: command.umbral,
      tipo: command.tipo,
      fechaAlerta: command.fechaAlerta,
      loteId: command.loteId,
      subLoteId: command.subLoteId,
    });
    const saved = await this.alertaRepository.create(alerta);

    if (alerta.esCritica()) {
      this.enviarNotificaciones(saved);
    }

    return saved;
  }

  private enviarNotificaciones(alerta: SensorAlerta): void {
    const mensaje = `Alerta ${alerta.tipo}: Sensor ${alerta.sensorId} con valor ${alerta.valor} supera umbral ${alerta.umbral}`;
    this.emailNotifier.enviar(mensaje);
    this.pushNotifier.enviar(mensaje);
  }
}
