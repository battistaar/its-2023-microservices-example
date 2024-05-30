/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { getOrderTransportConfig } from '@shipment/event-client';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PAYMENT_API_PORT || 3000;
  app.connectMicroservice<MicroserviceOptions>(getOrderTransportConfig());
  await app.startAllMicroservices();
  await app.listen(port);
  Logger.log(
    `🚀 Payment is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
