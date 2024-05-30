/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getOrderTransportConfig } from '@order/event-client';
import { AppModule } from './app/app.module';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.SHIPMENT_API_PORT || 3000;
  app.connectMicroservice<MicroserviceOptions>(getOrderTransportConfig());
  await app.startAllMicroservices();

  await app.listen(port);
  Logger.log(
    `🚀 Shipment is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
