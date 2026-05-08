import { Module } from '@nestjs/common';
import { AccionCorrectivaService } from './accion_correctiva.service';
import { AccionCorrectivaController } from './accion_correctiva.controller';

@Module({
  controllers: [AccionCorrectivaController],
  providers: [AccionCorrectivaService],
})
export class AccionCorrectivaModule {}
