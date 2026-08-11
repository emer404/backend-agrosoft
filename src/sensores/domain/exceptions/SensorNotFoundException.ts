export class SensorNotFoundException extends Error {
  constructor(id: number) {
    super(`Sensor with id ${id} not found`);
    this.name = 'SensorNotFoundException';
  }
}
