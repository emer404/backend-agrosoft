import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActividadEjecutadaModule } from './actividad_ejecutada/actividad_ejecutada.module';
import { VentasModule } from './ventas/ventas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { CosechaModule } from './cosecha/cosecha.module';

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
    VentasModule,
    UsuarioModule,
    RolModule,
    CosechaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}