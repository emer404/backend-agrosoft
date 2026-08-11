import { PartialType } from '@nestjs/mapped-types';
import { CreateAccionCorrectivaDto } from './create-accion_correctiva.dto';

export class UpdateAccionCorrectivaDto extends PartialType(
  CreateAccionCorrectivaDto,
) {}
