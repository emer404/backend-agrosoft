import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Insumo } from './entities/insumo.entity';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';

@Injectable()
export class InsumosService {

  constructor(
    @InjectRepository(Insumo)
    private readonly insumosRepository: Repository<Insumo>,
  ) {}

  async create(createInsumoDto: CreateInsumoDto) {
    const insumo = this.insumosRepository.create(createInsumoDto);
    return await this.insumosRepository.save(insumo);
  }

  async findAll() {
    return await this.insumosRepository.find();
  }

  async findOne(id: number) {
    return await this.insumosRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateInsumoDto: UpdateInsumoDto) {
    await this.insumosRepository.update(id, updateInsumoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.insumosRepository.delete(id);
  }
}