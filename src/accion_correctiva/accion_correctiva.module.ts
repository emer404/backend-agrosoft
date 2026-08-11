import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccionCorrectivaService } from './accion_correctiva.service';
import { AccionCorrectivaController } from './accion_correctiva.controller';
import { AccionCorrectiva } from './entities/accion_correctiva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccionCorrectiva])],
  controllers: [AccionCorrectivaController],
  providers: [AccionCorrectivaService],
})
export class AccionCorrectivaModule {}
