import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEjecutadaModule } from './actividad_ejecutada/actividad_ejecutada.module';
import { AccionCorrectivaModule } from './accion_correctiva/accion_correctiva.module';
import { SensoresModule } from './modules/sensores/sensores.module';
import { TiposSensoresModule } from './modules/tipos_sensores/tipos-sensores.module';
import { SensorLecturasModule } from './modules/sensor_lecturas/sensor-lecturas.module';
import { SensorAlertasModule } from './modules/sensor_alertas/sensor-alertas.module';
import { IotConfigModule } from './modules/iot_config/iot-config.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ActividadEjecutadaModule,
    AccionCorrectivaModule,
    SensoresModule,
    TiposSensoresModule,
    SensorLecturasModule,
    SensorAlertasModule,
    IotConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
