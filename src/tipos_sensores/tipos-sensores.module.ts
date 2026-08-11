import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoSensorTypeORMEntity } from './infrastructure/database/TipoSensorTypeORMEntity';
import { PostgresTipoSensorRepository } from './infrastructure/database/PostgresTipoSensorRepository';
import { HttpTipoSensorController } from './infrastructure/primary/HttpTipoSensorController';
import { CreateTipoSensorUseCase } from './application/CreateTipoSensorUseCase';
import { TipoSensorRepository } from './domain/TipoSensorRepository';

@Module({
  imports: [TypeOrmModule.forFeature([TipoSensorTypeORMEntity])],
  controllers: [HttpTipoSensorController],
  providers: [
    {
      provide: TipoSensorRepository,
      useClass: PostgresTipoSensorRepository,
    },
    CreateTipoSensorUseCase,
  ],
  exports: [TipoSensorRepository],
})
export class TiposSensoresModule {}
// src/modules/
// ├── tipos_sensores/              # 🆕 NUEVO MÓDULO
// │   ├── domain/
// │   │   ├── TipoSensor.ts        # Entidad de dominio
// │   │   └── TipoSensorRepository.ts
// │   └── application/
// │       └── CreateTipoSensorUseCase.ts
// └── sensores/                    # Módulo existente
//     ├── domain/
//     │   ├── Sensor.ts            # Ahora puede validar usando las reglas de su Tipo
//     │   └── SensorRepository.ts
