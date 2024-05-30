/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions } from '@nestjs/microservices';
import { getOrderTransportConfig } from '@order/event-client';
import { getWarehouseTransportConfig } from '@warehouse/event-client';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  app.connectMicroservice<MicroserviceOptions>(getOrderTransportConfig());
  app.connectMicroservice<MicroserviceOptions>(getWarehouseTransportConfig());
  await app.startAllMicroservices();
  console.log("starting on ", port)
  await app.listen(port);
  Logger.log(
    `🚀 MainAPI is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
