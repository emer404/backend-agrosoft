import { SensorAlerta } from './SensorAlerta';

export abstract class SensorAlertaRepository {
  abstract findAll(): Promise<SensorAlerta[]>;
  abstract findById(id: number): Promise<SensorAlerta | null>;
  abstract findBySensorId(sensorId: number): Promise<SensorAlerta[]>;
  abstract create(alerta: SensorAlerta): Promise<SensorAlerta>;
  abstract delete(id: number): Promise<void>;
}
