import { Sensor } from './Sensor';

export abstract class SensorRepository {
  abstract findAll(): Promise<Sensor[]>;
  abstract findById(id: number): Promise<Sensor | null>;
  abstract findByCultivoId(cultivoId: number): Promise<Sensor[]>;
  abstract findActivos(): Promise<Sensor[]>;
  abstract create(sensor: Sensor): Promise<Sensor>;
  abstract update(id: number, sensor: Partial<Sensor>): Promise<Sensor>;
  abstract delete(id: number): Promise<void>;
}
