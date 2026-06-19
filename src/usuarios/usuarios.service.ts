import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuariosRepository.create(createUsuarioDto);
    return await this.usuariosRepository.save(usuario);
  }

  async findAll() {
    return await this.usuariosRepository.find();
  }

  async findOne(id: number) {
    return await this.usuariosRepository.findOne({
      where: { id },
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return await this.usuariosRepository.delete(id);
  }
}