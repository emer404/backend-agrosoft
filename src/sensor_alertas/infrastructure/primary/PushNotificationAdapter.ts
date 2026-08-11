import { Injectable } from '@nestjs/common';

@Injectable()
export class PushNotificationAdapter {
  enviar(mensaje: string): void {
    // TODO: Integrar con servicio de push (Firebase, OneSignal, etc.)
    console.log(`[PushNotifier] Enviando alerta: ${mensaje}`);
  }
}
