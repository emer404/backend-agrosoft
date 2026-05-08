import { Injectable } from '@nestjs/common';
import { CreateAccionCorrectivaDto } from './dto/create-accion_correctiva.dto';
import { UpdateAccionCorrectivaDto } from './dto/update-accion_correctiva.dto';

@Injectable()
export class AccionCorrectivaService {
  create(createAccionCorrectivaDto: CreateAccionCorrectivaDto) {
    return 'This action adds a new accionCorrectiva';
  }

  findAll() {
    return `This action returns all accionCorrectiva`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accionCorrectiva`;
  }

  update(id: number, updateAccionCorrectivaDto: UpdateAccionCorrectivaDto) {
    return `This action updates a #${id} accionCorrectiva`;
  }

  remove(id: number) {
    return `This action removes a #${id} accionCorrectiva`;
  }
}
