import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InsumosModule } from './insumos/insumos.module';
import { CultivosModule } from './cultivos/cultivos.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'user_crudagro',
      password: 'agro123',
      database: 'db_crudagro',
      autoLoadEntities: true,
      synchronize: true,
    }),
    InsumosModule,
    CultivosModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [], 
})
export class AppModule {}
