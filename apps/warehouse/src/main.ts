/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { REDIS_HOST, REDIS_PORT, WAREHOUSE_PORT } from '@warehouse/config';
import { WarehouseModule } from './app/warehouse.module';

async function bootstrap() {
  const app = await NestFactory.create(WarehouseModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: REDIS_HOST,
      port: REDIS_PORT,
    },
  });
  await app.startAllMicroservices();
}

bootstrap();
