import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorAlertaTypeORMEntity } from './infrastructure/database/SensorAlertaTypeORMEntity';
import { PostgresAlertaRepository } from './infrastructure/database/PostgresAlertaRepository';
import { CreateAlertUseCase } from './application/CreateAlertUseCase';
import { SensorAlertaRepository } from './domain/SensorAlertaRepository';
import { EmailNotifierAdapter } from './infrastructure/primary/EmailNotifierAdapter';
import { PushNotificationAdapter } from './infrastructure/primary/PushNotificationAdapter';

@Module({
  imports: [TypeOrmModule.forFeature([SensorAlertaTypeORMEntity])],
  controllers: [],
  providers: [
    {
      provide: SensorAlertaRepository,
      useClass: PostgresAlertaRepository,
    },
    CreateAlertUseCase,
    EmailNotifierAdapter,
    PushNotificationAdapter,
  ],
  exports: [SensorAlertaRepository, CreateAlertUseCase],
})
export class SensorAlertasModule {}
// src/modules/
// └── sensor_alertas/              # 🆕 NUEVO MÓDULO DE REACCIONES Y ALERTAS
//     ├── domain/
//     │   ├── SensorAlerta.ts      # Entidad de dominio (Representa la anomalía)
//     │   └── SensorAlertaRepository.ts
//     ├── application/
//     │   └── CreateAlertUseCase.ts # Caso de uso para registrar y disparar la alerta
//     └── infrastructure/
//         ├── database/
//         │   └── PostgresAlertaRepository.ts
//         └── primary/             # Adaptadores de salida para notificaciones
//             ├── EmailNotifierAdapter.ts
//             └── PushNotificationAdapter.ts
