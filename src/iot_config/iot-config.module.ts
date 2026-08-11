import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IotGlobalConfigTypeORMEntity } from './infrastructure/database/IotGlobalConfigTypeORMEntity';
import { PostgresIotConfigRepository } from './infrastructure/database/PostgresIotConfigRepository';
import { GetBrokerConnectionUseCase } from './application/GetBrokerConnectionUseCase';
import { IotConfigRepository } from './domain/IotConfigRepository';

@Module({
  imports: [TypeOrmModule.forFeature([IotGlobalConfigTypeORMEntity])],
  controllers: [],
  providers: [
    {
      provide: IotConfigRepository,
      useClass: PostgresIotConfigRepository,
    },
    GetBrokerConnectionUseCase,
  ],
  exports: [IotConfigRepository, GetBrokerConnectionUseCase],
})
export class IotConfigModule {}
// src/modules/
// └── iot_config/                  # 🆕 NUEVO MÓDULO DE CONFIGURACIÓN DE RED
//     ├── domain/
//     │   ├── IotGlobalConfig.ts   # Entidad de dominio (Encriptación y lógica de red)
//     │   └── IotConfigRepository.ts
//     ├── application/
//     │   └── GetBrokerConnectionUseCase.ts # Provee los datos de conexión limpios
//     └── infrastructure/
//         └── database/
//             └── PostgresIotConfigRepository.ts
