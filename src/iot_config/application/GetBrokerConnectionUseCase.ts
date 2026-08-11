import { Inject } from '@nestjs/common';
import { IotGlobalConfig } from '../domain/IotGlobalConfig';
import { IotConfigRepository } from '../domain/IotConfigRepository';

export interface BrokerConnection {
  url: string;
  protocol: string;
  broker: string;
  port: number;
  topicPrefix: string;
  defaultTopics: string[];
  customTopics: string[];
}

export class GetBrokerConnectionUseCase {
  constructor(
    @Inject(IotConfigRepository)
    private readonly configRepository: IotConfigRepository,
  ) {}

  async execute(): Promise<BrokerConnection> {
    const config = await this.configRepository.findActivo();
    if (!config) {
      throw new Error('No active IoT configuration found');
    }
    return this.toConnection(config);
  }

  private toConnection(config: IotGlobalConfig): BrokerConnection {
    return {
      url: config.connectionUrl(),
      protocol: config.protocol,
      broker: config.broker,
      port: config.port,
      topicPrefix: config.topicPrefix,
      defaultTopics: this.parseTopics(config.defaultTopics),
      customTopics: this.parseTopics(config.customTopics),
    };
  }

  private parseTopics(topics: string): string[] {
    if (!topics) return [];
    return topics
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
  }
}
