import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailNotifierAdapter {
  enviar(mensaje: string): void {
    // TODO: Integrar con servicio de email (SendGrid, Nodemailer, etc.)
    console.log(`[EmailNotifier] Enviando alerta: ${mensaje}`);
  }
}
