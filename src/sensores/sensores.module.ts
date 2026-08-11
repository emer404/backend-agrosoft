import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SensorTypeORMEntity } from './infrastructure/database/SensorTypeORMEntity';
import { PostgresSensorRepository } from './infrastructure/database/PostgresSensorRepository';
import { HttpSensorController } from './infrastructure/primary/HttpSensorController';
import { MqttSensorListener } from './infrastructure/primary/MqttSensorListener';
import { CreateSensorUseCase } from './application/CreateSensorUseCase';
import { GetActiveSensorsUseCase } from './application/GetActiveSensorsUseCase';
import { SensorRepository } from './domain/SensorRepository';

@Module({
  imports: [TypeOrmModule.forFeature([SensorTypeORMEntity])],
  controllers: [HttpSensorController],
  providers: [
    {
      provide: SensorRepository,
      useClass: PostgresSensorRepository,
    },
    CreateSensorUseCase,
    GetActiveSensorsUseCase,
    MqttSensorListener,
  ],
  exports: [SensorRepository, MqttSensorListener],
})
export class SensoresModule {}
// src/modules/sensores/
// ├── domain/                      # 1. NÚCLEO: Reglas de negocio puras (Sin frameworks)
// │   ├── Sensor.ts                # Entidad de dominio (Atributos y validaciones)
// │   ├── SensorRepository.ts      # Puerto de Salida (Interfaz para la BD)
// │   └── exceptions/              # Errores específicos del negocio
// ├── application/                 # 2. CASOS DE USO: Orquestación
// │   ├── CreateSensorUseCase.ts   # Caso de uso: Crear sensor
// │   └── GetActiveSensorsUseCase.ts
// └── infrastructure/              # 3. ADAPTADORES: Herramientas externas
//     ├── database/
//     │   ├── PostgresSensorRepository.ts # Adaptador de Salida (Implementa la interfaz)
//     │   └── SensorTypeORMEntity.ts      # Modelo de base de datos (si usas ORM)
//     └── primary/
//         ├── HttpSensorController.ts     # Adaptador de Entrada (Express/NestJS)
//         └── MqttSensorListener.ts       # Adaptador de Entrada (Suscripción IoT)
