/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { REDIS_HOST, REDIS_PORT } from '@warehouse/config';
import { WarehouseModule } from './app/warehouse.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(WarehouseModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.REDIS,
    options: {
      host: REDIS_HOST,
      port: REDIS_PORT,
    },
  });
  await app.startAllMicroservices();
  const port = process.env['WAREHOUSE_API_PORT'] || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Warehouse is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
