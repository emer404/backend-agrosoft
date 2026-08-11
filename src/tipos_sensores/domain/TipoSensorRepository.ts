import { TipoSensor } from './TipoSensor';

export abstract class TipoSensorRepository {
  abstract findAll(): Promise<TipoSensor[]>;
  abstract findById(id: number): Promise<TipoSensor | null>;
  abstract create(tipoSensor: TipoSensor): Promise<TipoSensor>;
  abstract update(
    id: number,
    tipoSensor: Partial<TipoSensor>,
  ): Promise<TipoSensor>;
  abstract delete(id: number): Promise<void>;
}
