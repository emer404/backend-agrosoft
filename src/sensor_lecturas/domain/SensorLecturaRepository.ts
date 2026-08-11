import { SensorLectura } from './SensorLectura';

export abstract class SensorLecturaRepository {
  abstract findAll(): Promise<SensorLectura[]>;
  abstract findById(id: number): Promise<SensorLectura | null>;
  abstract findBySensorId(sensorId: number): Promise<SensorLectura[]>;
  abstract create(lectura: SensorLectura): Promise<SensorLectura>;
  abstract delete(id: number): Promise<void>;
}
