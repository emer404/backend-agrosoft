import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { Cosecha } from './entities/cosecha.entity';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private readonly cosechaRepository: Repository<Cosecha>,
  ) {}

  async create(CreateCosechaDto: CreateCosechaDto) {
    const nuevaCosecha = this.cosechaRepository.create(CreateCosechaDto);
    return await this.cosechaRepository.save(nuevaCosecha);
  }

  async findAll(){
    return await this.cosechaRepository.find();
  }
}
