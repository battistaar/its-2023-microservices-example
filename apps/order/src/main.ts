/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { OrderModule } from './app/order.module';
import { getOrderTransportConfig } from '@shipment/event-client';

async function bootstrap() {
  const app = await NestFactory.create(OrderModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.connectMicroservice(getOrderTransportConfig())
  await app.startAllMicroservices();

  const port = process.env.ORDER_API_PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Order is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
