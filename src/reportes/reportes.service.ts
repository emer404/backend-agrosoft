import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { Reporte } from './entities/reporte.entity'

@Injectable()
export class ReportesService {
  constructor(
    @InjectRepository(Reporte)
    private readonly reporteRepository: Repository<Reporte>,
  ){}

  async create(CreateReporteDto: CreateReporteDto) {
    const nuevoReporte = this.reporteRepository.create(CreateReporteDto);
    return await this.reporteRepository.save(nuevoReporte);
  }

  async findAll() {
    return await this.reporteRepository.find();
  }
}
