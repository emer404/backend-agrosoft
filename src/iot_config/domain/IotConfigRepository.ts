import { IotGlobalConfig } from './IotGlobalConfig';

export abstract class IotConfigRepository {
  abstract findAll(): Promise<IotGlobalConfig[]>;
  abstract findById(id: number): Promise<IotGlobalConfig | null>;
  abstract findActivo(): Promise<IotGlobalConfig | null>;
  abstract create(config: IotGlobalConfig): Promise<IotGlobalConfig>;
  abstract update(
    id: number,
    config: Partial<IotGlobalConfig>,
  ): Promise<IotGlobalConfig>;
  abstract delete(id: number): Promise<void>;
}
