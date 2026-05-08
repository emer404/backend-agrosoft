import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActividadEjecutada } from './entities/actividad_ejecutada.entity';
import { CreateActividadEjecutadaDto } from './dto/create-actividad_ejecutada.dto';
import { UpdateActividadEjecutadaDto } from './dto/update-actividad_ejecutada.dto';

@Injectable()
export class ActividadEjecutadaService {
  constructor(
    @InjectRepository(ActividadEjecutada)
    private readonly actividadEjecutadaRepository: Repository<ActividadEjecutada>,
  ) {}

  create(createActividadEjecutadaDto: CreateActividadEjecutadaDto): Promise<ActividadEjecutada> {
    const actividad = this.actividadEjecutadaRepository.create(createActividadEjecutadaDto);
    return this.actividadEjecutadaRepository.save(actividad);
  }

  findAll(): Promise<ActividadEjecutada[]> {
    return this.actividadEjecutadaRepository.find();
  }

  async findOne(id: number): Promise<ActividadEjecutada> {
    const actividad = await this.actividadEjecutadaRepository.findOneBy({ id_actividad_ejecutada: id });
    if (!actividad) {
      throw new NotFoundException(`ActividadEjecutada con id ${id} no encontrada`);
    }
    return actividad;
  }

  async update(id: number, updateActividadEjecutadaDto: UpdateActividadEjecutadaDto): Promise<ActividadEjecutada> {
    const actividad = await this.findOne(id);
    Object.assign(actividad, updateActividadEjecutadaDto);
    return this.actividadEjecutadaRepository.save(actividad);
  }

  async remove(id: number): Promise<void> {
    const actividad = await this.findOne(id);
    await this.actividadEjecutadaRepository.remove(actividad);
  }
}
