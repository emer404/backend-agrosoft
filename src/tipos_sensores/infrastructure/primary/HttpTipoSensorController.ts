import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';
import {
  CreateTipoSensorUseCase,
  CreateTipoSensorCommand,
} from '../../application/CreateTipoSensorUseCase';
import { TipoSensor } from '../../domain/TipoSensor';
import { TipoSensorRepository } from '../../domain/TipoSensorRepository';
import { CreateTipoSensorDto } from '../dto/create-tipo-sensor.dto';
import { UpdateTipoSensorDto } from '../dto/update-tipo-sensor.dto';

@Controller('tipos-sensores')
export class HttpTipoSensorController {
  constructor(
    private readonly createTipoSensorUseCase: CreateTipoSensorUseCase,
    @Inject(TipoSensorRepository)
    private readonly tipoSensorRepository: TipoSensorRepository,
  ) {}

  @Post()
  async create(@Body() dto: CreateTipoSensorDto) {
    const command: CreateTipoSensorCommand = {
      nombre: dto.nombre,
      unidad: dto.unidad,
      decimales: dto.decimales,
      descripcion: dto.descripcion,
      imagen: dto.imagen,
      ttlMinutos: dto.ttl_minutos,
    };
    return this.createTipoSensorUseCase.execute(command);
  }

  @Get()
  async findAll() {
    return this.tipoSensorRepository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const tipoSensor = await this.tipoSensorRepository.findById(id);
    if (!tipoSensor) {
      throw new Error(`TipoSensor with id ${id} not found`);
    }
    return tipoSensor;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTipoSensorDto,
  ) {
    const updates: Partial<TipoSensor> = {};
    if (dto.nombre !== undefined) updates.nombre = dto.nombre;
    if (dto.unidad !== undefined) updates.unidad = dto.unidad;
    if (dto.decimales !== undefined) updates.decimales = dto.decimales;
    if (dto.descripcion !== undefined) updates.descripcion = dto.descripcion;
    if (dto.imagen !== undefined) updates.imagen = dto.imagen;
    if (dto.ttl_minutos !== undefined) updates.ttlMinutos = dto.ttl_minutos;
    return this.tipoSensorRepository.update(id, updates);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.tipoSensorRepository.delete(id);
  }
}
