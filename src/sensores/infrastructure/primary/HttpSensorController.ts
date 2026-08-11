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
  CreateSensorUseCase,
  CreateSensorCommand,
} from '../../application/CreateSensorUseCase';
import { GetActiveSensorsUseCase } from '../../application/GetActiveSensorsUseCase';
import { Sensor } from '../../domain/Sensor';
import { SensorRepository } from '../../domain/SensorRepository';
import { SensorNotFoundException } from '../../domain/exceptions/SensorNotFoundException';
import { CreateSensorDto } from '../dto/create-sensor.dto';
import { UpdateSensorDto } from '../dto/update-sensor.dto';

@Controller('sensores')
export class HttpSensorController {
  constructor(
    private readonly createSensorUseCase: CreateSensorUseCase,
    private readonly getActiveSensorsUseCase: GetActiveSensorsUseCase,
    @Inject(SensorRepository)
    private readonly sensorRepository: SensorRepository,
  ) {}

  @Post()
  async create(@Body() dto: CreateSensorDto) {
    const command: CreateSensorCommand = {
      nombreSensor: dto.nombre_sensor,
      tipoSensorId: dto.tipo_sensor_id,
      protocolo: dto.protocolo,
      endpointUrl: dto.endpoint_url,
      mqttTopic: dto.mqtt_topic,
      valorMinimoSensor: dto.valor_minimo_sensor,
      valorMaximoSensor: dto.valor_maximo_sensor,
      cultivoId: dto.cultivo_id,
      creadoPorUsuarioId: dto.creado_por_usuario_id,
      globalConfigId: dto.global_config_id,
      loteId: dto.lote_id,
      subLoteId: dto.sub_lote_id,
    };
    return this.createSensorUseCase.execute(command);
  }

  @Get()
  async findAll() {
    return this.sensorRepository.findAll();
  }

  @Get('activos')
  async findActivos() {
    return this.getActiveSensorsUseCase.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const sensor = await this.sensorRepository.findById(id);
    if (!sensor) {
      throw new SensorNotFoundException(id);
    }
    return sensor;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSensorDto,
  ) {
    const updates: Partial<Sensor> = {};
    if (dto.nombre_sensor !== undefined)
      updates.nombreSensor = dto.nombre_sensor;
    if (dto.tipo_sensor_id !== undefined)
      updates.tipoSensorId = dto.tipo_sensor_id;
    if (dto.protocolo !== undefined) updates.protocolo = dto.protocolo;
    if (dto.endpoint_url !== undefined) updates.endpointUrl = dto.endpoint_url;
    if (dto.mqtt_topic !== undefined) updates.mqttTopic = dto.mqtt_topic;
    if (dto.valor_minimo_sensor !== undefined)
      updates.valorMinimoSensor = dto.valor_minimo_sensor;
    if (dto.valor_maximo_sensor !== undefined)
      updates.valorMaximoSensor = dto.valor_maximo_sensor;
    if (dto.activo !== undefined) updates.activo = dto.activo;
    if (dto.estado_conexion !== undefined)
      updates.estadoConexion = dto.estado_conexion;
    if (dto.estado !== undefined) updates.estado = dto.estado;
    if (dto.ultimo_valor !== undefined) updates.ultimoValor = dto.ultimo_valor;
    if (dto.cultivo_id !== undefined) updates.cultivoId = dto.cultivo_id;
    if (dto.lote_id !== undefined) updates.loteId = dto.lote_id;
    if (dto.sub_lote_id !== undefined) updates.subLoteId = dto.sub_lote_id;
    return this.sensorRepository.update(id, updates);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.sensorRepository.delete(id);
  }
}
