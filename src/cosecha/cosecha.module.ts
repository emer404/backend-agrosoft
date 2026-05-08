import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { Cosecha } from './entities/cosecha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cosecha])],
  controllers: [CosechaController],
  providers: [CosechaService],
})
export class CosechaModule {}
