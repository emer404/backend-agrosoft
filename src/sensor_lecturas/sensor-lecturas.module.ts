import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorLecturaTypeORMEntity } from './infrastructure/database/SensorLecturaTypeORMEntity';
import { PostgresLecturaRepository } from './infrastructure/database/PostgresLecturaRepository';
import { RegisterReadingUseCase } from './application/RegisterReadingUseCase';
import { SensorLecturaRepository } from './domain/SensorLecturaRepository';

@Module({
  imports: [TypeOrmModule.forFeature([SensorLecturaTypeORMEntity])],
  controllers: [],
  providers: [
    {
      provide: SensorLecturaRepository,
      useClass: PostgresLecturaRepository,
    },
    RegisterReadingUseCase,
  ],
  exports: [SensorLecturaRepository, RegisterReadingUseCase],
})
export class SensorLecturasModule {}
// src/modules/
// └── sensor_lecturas/              # 🆕 NUEVO MÓDULO DE TELEMETRÍA HISTÓRICA
//     ├── domain/
//     │   ├── SensorLectura.ts      # Entidad de dominio (Inmutable)
//     │   └── SensorLecturaRepository.ts
//     ├── application/
//     │   └── RegisterReadingUseCase.ts # Registra y valida la serie de tiempo
//     └── infrastructure/
//         └── database/
//             ├── PostgresLecturaRepository.ts # Adaptador SQL tradicional
//             └── TimescaleLecturaRepository.ts  # Opcional: Adaptador optimizado
